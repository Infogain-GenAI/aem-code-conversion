"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.recursiveCharacterTextSplitter = recursiveCharacterTextSplitter;
exports.chunkMethodsByTokenLimit = chunkMethodsByTokenLimit;
exports.chunkMethodContentUsingAST = chunkMethodContentUsingAST;
exports.chunkJavaCodeUsingLangChain = chunkJavaCodeUsingLangChain;
const tokenEstimator_1 = require("./tokenEstimator"); // Import the Metadata and Chunk interfaces  
const chunk_text_1 = __importDefault(require("chunk-text")); // Import chunk-text package
const text_splitter_1 = require("langchain/text_splitter"); // Import the RecursiveCharacterTextSplitter class}
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
function recursiveCharacterTextSplitter(methodContent, tokenLimit) {
    const chunks = [];
    const lines = methodContent.split('\n');
    let currentChunk = '';
    for (const line of lines) {
        const estimatedTokens = (0, tokenEstimator_1.estimateTokens)(currentChunk + '\n' + line);
        if (estimatedTokens > tokenLimit) {
            if (currentChunk.trim()) {
                chunks.push(currentChunk.trim());
            }
            currentChunk = line;
        }
        else {
            currentChunk += '\n' + line;
        }
    }
    if (currentChunk.trim()) {
        chunks.push(currentChunk.trim());
    }
    // If any chunk exceeds the token limit, split it further
    return chunks.flatMap(chunk => {
        if ((0, tokenEstimator_1.estimateTokens)(chunk) > tokenLimit) {
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
function chunkMethodsByTokenLimit(metadata, ast, fileContent) {
    return __awaiter(this, void 0, void 0, function* () {
        const logicalChunks = chunkMethodByTokens(fileContent);
        const chunks = [];
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
    });
}
function chunkMethodContentUsingAST(cst, tokenLimit) {
    const chunks = [];
    let currentChunk = '';
    function traverse(node) {
        console.log('node in traverse ', node);
        if (node.image) {
            console.log('node.image in traverse ', node.image);
            const estimatedTokens = (0, tokenEstimator_1.estimateTokens)(currentChunk + node.image);
            if (estimatedTokens > tokenLimit) {
                if (currentChunk.trim()) {
                    chunks.push(currentChunk.trim());
                }
                currentChunk = node.image;
            }
            else {
                currentChunk += node.image;
            }
        }
        if (node.children) {
            for (const key in node.children) {
                node.children[key].forEach((child) => traverse(child));
            }
        }
    }
    function traverseLISP(node) {
        if (typeof node === 'string') {
            const estimatedTokens = (0, tokenEstimator_1.estimateTokens)(currentChunk + node);
            console.log('estimatedTokens in traverseLISP ', estimatedTokens);
            if (estimatedTokens > tokenLimit) {
                if (currentChunk.trim()) {
                    chunks.push(currentChunk.trim());
                }
                currentChunk = node;
            }
            else {
                currentChunk += node;
            }
        }
        else if (Array.isArray(node)) {
            node.forEach(child => traverseLISP(child));
        }
    }
    traverse(cst);
    if (currentChunk.trim()) {
        chunks.push(currentChunk.trim());
    }
    return chunks.flatMap(chunk => {
        if ((0, tokenEstimator_1.estimateTokens)(chunk) > tokenLimit) {
            return (0, chunk_text_1.default)(chunk, (tokenLimit / 2));
        }
        return [chunk];
    });
}
function chunkJavaCodeUsingLangChain(javaCode, tokenLimit) {
    return __awaiter(this, void 0, void 0, function* () {
        const splitter = text_splitter_1.RecursiveCharacterTextSplitter.fromLanguage("java", { separators: ["\nclass ", "\npublic ", "\nprotected ", "\nprivate ", "\nstatic ", "\nif ", "\nfor ", "\nwhile ", "\nswitch ", "\ncase ", "\n\n", "\n", " ", ""], chunkSize: tokenLimit });
        const chunks = yield splitter.splitText(javaCode);
        return chunks.map((chunk, index) => ({
            content: chunk.trim(),
            context: `Part ${index + 1} of ${chunks.length}`
        }));
    });
}
const calculateTokenCount = (text) => {
    // return text.split(/\s+/).length; // Basic word-based token estimation
    return (0, tokenEstimator_1.estimateTokens)(text); // Advanced token estimation
};
const chunkMethodByTokens = (methodCode) => {
    const lines = methodCode.split("\n");
    console.log('lines ****************************' + lines.length);
    const chunks = [];
    let currentChunk = "";
    let currentTokenCount = 0;
    let index = 0;
    // for (const line of lines) {
    //     index++;
    //     const lineTokenCount = calculateTokenCount(line);
    //     if (currentTokenCount + lineTokenCount + PROMPT_TOKEN_SIZE > TOKEN_LIMIT || index >= CHUNK_SIZE) {
    //         chunks.push({ content: currentChunk.trim(), context: null });
    //         currentChunk = ""; // Start a new chunk
    //         currentTokenCount = 0;
    //         index = 0;
    //         // Skip the next few lines to create an overlap between chunks
    //         // Add overlap lines
    //         const overlapStart = Math.max(0, index - CHUNK_OVERLAP + 1);
    //         console.log('overlapStart in chunkMethodByTokens ', overlapStart);
    //         for (let j = overlapStart; j <= index; j++) {
    //             console.log('lines[j] in chunkMethodByTokens ', lines[j]);
    //             currentChunk += lines[j] + "\n";
    //             currentTokenCount += calculateTokenCount(lines[j]);
    //         }
    //     }
    //     currentChunk += line + "\n";
    //     //console.log('currentChunk in chunkMethodByTokens ', currentChunk);  
    //     currentTokenCount += lineTokenCount;
    // }
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const lineTokenCount = calculateTokenCount(line);
        if (currentTokenCount + lineTokenCount + PROMPT_TOKEN_SIZE > TOKEN_LIMIT || index >= CHUNK_SIZE) {
            chunks.push({ content: currentChunk.trim(), context: null });
            currentChunk = ""; // Start a new chunk
            currentTokenCount = 0;
            index = 0;
            // Add overlap lines
            const overlapStart = Math.max(0, i - CHUNK_OVERLAP + 1);
            console.log('overlapStart in chunkMethodByTokens ', overlapStart);
            for (let j = overlapStart; j <= i; j++) {
                currentChunk += lines[j] + "\n";
                currentTokenCount += calculateTokenCount(lines[j]);
                //index++;
            }
        }
        currentChunk += line + "\n";
        currentTokenCount += lineTokenCount;
        index++;
    }
    if (currentChunk)
        chunks.push({ content: currentChunk.trim(), context: null });
    {
        chunks.forEach((chunk) => {
            console.log('chunk in chunkMethodByTokens &&&&&&&&&&', chunk.content);
            console.log('chunk in chunkMethodByTokens ##########', chunk.context);
        });
    }
    return chunks;
};
//# sourceMappingURL=chunkingUtil.js.map