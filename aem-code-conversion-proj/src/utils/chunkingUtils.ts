import { Metadata, Chunk } from "../types/types";
import { estimateTokens } from "./tokenEstimator";


export const TOKEN_LIMIT = 4096; // Token limit for OpenAI

/**
 * Break methods into token-friendly chunks based on metadata.
 * @param metadata - Metadata containing method details.
 * @param fileContent - The full file content.
 * @returns Array of Chunks, each representing a piece of a method.
 */
export function chunkMethodsByTokenLimit(metadata: Metadata, fileContent: string): Chunk[] {
    const chunks: Chunk[] = [];
    console.log('inside chunkMethodsByTokenLimit fileContent ', fileContent);

    const lines = fileContent.split('\n');

    metadata.methods.forEach(method => {
        console.log('inside metadata.methods.forEach in chunkMethodsByTokenLimit method.start ', method.start);
        console.log('inside metadata.methods.forEach in chunkMethodsByTokenLimit method.end ', method.end);

        // Extract the method content using the start and end line numbers
        const methodLines = lines.slice(method.start - 1, method.end); // Adjust for zero-based index
        const methodContent = methodLines.join('\n');
        console.log('methodContent in chunkMethodsByTokenLimit ', methodContent);

        const tokenCount = estimateTokens(methodContent);
        console.log('tokenCount in chunkMethodsByTokenLimit   ', tokenCount + ' - ' + method.methodName);

        if (tokenCount <= TOKEN_LIMIT) {
            chunks.push({ content: methodContent, context: null });
        } else {
            const logicalChunks = splitMethodIntoChunks(methodContent);
            logicalChunks.forEach((chunk, index) => {
                chunks.push({
                    content: chunk,
                    context: `Part ${index + 1} of ${logicalChunks.length} for method ${method.methodName}`
                });
            });
        }
    });
    
    console.log('chunks in chunkMethodsByTokenLimit ', chunks);
    console.log('chunks in chunkMethodsByTokenLimit ', chunks.length);

    return chunks;
}

// /**
//  * Chunk Java source code methods into smaller logical units.
//  * @param javaSourceCode - The full Java source code.
//  * @param metadata - Metadata containing method details.
//  * @returns Array of Chunks, each representing a piece of a method.
//  */
// export function chunkJavaMethods(javaSourceCode: string, metadata: Metadata): Chunk[] {
//     const chunks: Chunk[] = [];
//     console.log('inside chunkJavaMethods');

//     metadata.methods.forEach(method => {
//         const methodContent = javaSourceCode.slice(method.start, method.end);
//         const tokenCount = estimateTokens(methodContent);

//         if (tokenCount <= TOKEN_LIMIT) {
//             chunks.push({ content: methodContent, context: null });
//         } else {
//             const logicalChunks = splitMethodIntoChunks(methodContent);
//             logicalChunks.forEach((chunk, index) => {
//                 chunks.push({
//                     content: chunk,
//                     context: `Part ${index + 1} of ${logicalChunks.length} for method ${method.methodName}`
//                 });
//             });
//         }
//     });

//     return chunks;
// }

// /**
//  * Split a method's content into smaller logical chunks.
//  * @param methodContent - The full content of the method.
//  * @returns Array of strings, each representing a logical chunk.
//  */
// export function splitMethodIntoChunks(methodContent: string): string[] {
//     console.log('inside splitMethodIntoChunks');
//     const chunkSize = TOKEN_LIMIT / 2; // Keep chunks well within token limit
//     const chunks: string[] = [];
//     let currentChunk = "";

//     methodContent.split(/\n/).forEach(line => {
//         const estimatedTokens = estimateTokens(currentChunk + line);
//         if (estimatedTokens > chunkSize) {
//             chunks.push(currentChunk.trim());
//             currentChunk = line;
//         } else {
//             currentChunk += `\n${line}`;
//         }
//     });

//     if (currentChunk.trim()) {
//         chunks.push(currentChunk.trim());
//     }

//     return chunks;
// }

/**
 * Split a method's content into smaller logical chunks.
 * @param methodContent - The full content of the method.
 * @returns Array of strings, each representing a logical chunk.
 */
export function splitMethodIntoChunks(methodContent: string): string[] {
    console.log('inside splitMethodIntoChunks');
    const chunkSize = TOKEN_LIMIT / 2; // Keep chunks well within token limit
    const methodChunks: string[] = [];
    let currentChunk = "";

    methodContent.split(/\n/).forEach(line => {
        const estimatedTokens = estimateTokens(currentChunk + line);
        if (estimatedTokens > chunkSize) {
            methodChunks.push(currentChunk.trim());
            currentChunk = line;
        } else {
            currentChunk += `\n${line}`;
        }
    });

    if (currentChunk.trim()) {
        methodChunks.push(currentChunk.trim());
    }

    return methodChunks;
}

