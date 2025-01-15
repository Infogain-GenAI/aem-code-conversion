import { exit } from "process";
import { Metadata, Chunk } from "../types/types";
import { estimateTokens } from "./tokenEstimator"; // Import the Metadata and Chunk interfaces  
import chunkText from 'chunk-text'; // Import chunk-text package
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter'; // Import the RecursiveCharacterTextSplitter class}

const TOKEN_LIMIT = 4096; // Define your token limit
const PROMPT_TOKEN_SIZE = 3000; // Define the token size for the prompt
const CHUNK_SIZE = 40; // Define the maximum number of lines for a chunk
const CHUNK_OVERLAP = 5; // Define the number of overlapping lines between chunks

/**
 * Split a method's content into smaller logical chunks recursively.
 * @param methodContent - The full content of the method.
 * @param tokenLimit - The token limit for each chunk.
 * @returns Array of strings, each representing a logical chunk.
 */
export function recursiveCharacterTextSplitter(methodContent: string, tokenLimit: number): string[] {
    const chunks: string[] = [];
    const lines = methodContent.split('\n');
    let currentChunk = '';

    for (const line of lines) {
        const estimatedTokens = estimateTokens(currentChunk + '\n' + line);
        if (estimatedTokens > tokenLimit) {
            if (currentChunk.trim()) {
                chunks.push(currentChunk.trim());
            }
            currentChunk = line;
        } else {
            currentChunk += '\n' + line;
        }
    }

    if (currentChunk.trim()) {
        chunks.push(currentChunk.trim());
    }

    // If any chunk exceeds the token limit, split it further
    return chunks.flatMap(chunk => {
        if (estimateTokens(chunk) > tokenLimit) {
            return recursiveCharacterTextSplitter(chunk, tokenLimit);
        }
        return [chunk];
    });
}

/**
 * Chunk methods by token limit.
 * @param metadata - Metadata containing method information.
 * @param fileContent - The full content of the file.
 * @returns Array of chunks.
 */
export async function chunkMethodsByTokenLimit(metadata: Metadata, ast: string, fileContent: string): Promise<Chunk[]> {
    const logicalChunks = chunkMethodByTokens(fileContent);
    const chunks: Chunk[] = [];
    logicalChunks.forEach((chunk, index) => {
        chunks.push({
            content: chunk.content,
            context: `Part ${index + 1} of ${logicalChunks.length}  for the class MyAccountServlet.java `
        });
    });
    chunks.forEach((chunk) => {
        console.log('chunk in chunkMethodsByTokenLimit ', chunk.context);
    });
    return chunks;
}

export function chunkMethodContentUsingAST(cst: string, tokenLimit: number): string[] {
    const chunks: string[] = [];
    let currentChunk = '';

    function traverse(node: any) {
        console.log('node in traverse ', node);
        if (node.image) {
            console.log('node.image in traverse ', node.image);
            const estimatedTokens = estimateTokens(currentChunk + node.image);
            if (estimatedTokens > tokenLimit) {
                if (currentChunk.trim()) {
                    chunks.push(currentChunk.trim());
                }
                currentChunk = node.image;
            } else {
                currentChunk += node.image;
            }
        }

        if (node.children) {
            for (const key in node.children) {
                node.children[key].forEach((child: any) => traverse(child));
            }
        }
    }

    function traverseLISP(node: any) {
        if (typeof node === 'string') {
            const estimatedTokens = estimateTokens(currentChunk + node);
            console.log('estimatedTokens in traverseLISP ', estimatedTokens);
            if (estimatedTokens > tokenLimit) {
                if (currentChunk.trim()) {
                    chunks.push(currentChunk.trim());
                }
                currentChunk = node;
            } else {
                currentChunk += node;
            }
        } else if (Array.isArray(node)) {
            node.forEach(child => traverseLISP(child));
        }
    }

    traverse(cst);

    if (currentChunk.trim()) {
        chunks.push(currentChunk.trim());
    }

    return chunks.flatMap(chunk => {
        if (estimateTokens(chunk) > tokenLimit) {
            return chunkText(chunk, (tokenLimit / 2));
        }
        return [chunk];
    });
}

export async function chunkJavaCodeUsingLangChain(javaCode: string, tokenLimit: number): Promise<Chunk[]> {
    const splitter = RecursiveCharacterTextSplitter.fromLanguage("java", { separators: ["\nclass ", "\npublic ", "\nprotected ", "\nprivate ", "\nstatic ", "\nif ", "\nfor ", "\nwhile ", "\nswitch ", "\ncase ", "\n\n", "\n", " ", ""], chunkSize: tokenLimit });
    const chunks = await splitter.splitText(javaCode);
    return chunks.map((chunk: string, index: number) => ({
        content: chunk.trim(),
        context: `Part ${index + 1} of ${chunks.length}`
    }));
}

const calculateTokenCount = (text: string): number => {
    // return text.split(/\s+/).length; // Basic word-based token estimation
    return estimateTokens(text); // Advanced token estimation
};

const chunkMethodByTokens = (methodCode: string): Chunk[] => {
    const lines = methodCode.split("\n");
    console.log('lines ****************************' + lines.length);
    const chunks: Chunk[] = [];
    let currentChunk = "";
    let currentTokenCount = 0;
    let index = 0;

    for (const line of lines) {
     
        index++;
      const lineTokenCount = calculateTokenCount(line);
      
      if (currentTokenCount + lineTokenCount + PROMPT_TOKEN_SIZE > TOKEN_LIMIT || index >= 50 ) {
        chunks.push({ content: currentChunk.trim(), context: null });
        currentChunk = ""; // Start a new chunk
        currentTokenCount = 0;
        index = 0;
      }
      currentChunk += line + "\n";
      currentTokenCount += lineTokenCount;
      //console.log('currentChunk ' + currentChunk);
        
    }
    
    if (currentChunk) chunks.push({ content: currentChunk.trim(), context: null });
    {
        chunks.forEach((chunk) => {
            console.log('chunk in chunkMethodByTokens &&&&&&&&&&', chunk.content);
            console.log('chunk in chunkMethodByTokens ##########', chunk.context);
        });
    }
    
    return chunks;
};

