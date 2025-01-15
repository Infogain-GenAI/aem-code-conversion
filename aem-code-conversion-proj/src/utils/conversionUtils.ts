import { Chunk, ConvertedFile } from "../types/types";
import { sendToOpenAI } from "../services/openAIService";
import { LoggingService } from "../services/loggingService";

const logger = LoggingService.getInstance();


export async function processChunks(chunks: Chunk[]): Promise<ConvertedFile> {
    let convertedMethods: string[] = [];

    for (const chunk of chunks) {
        try {
            await delay(2000); // Simulate delay
            if (chunk.content && chunk.context) {
                const convertedChunk = await sendToOpenAI(chunk.content, chunk.context);
                convertedMethods.push(convertedChunk);
            } else {
                logger.logError(`Chunk content or context is null: ${chunk.context}`);
                throw new Error('Chunk content or context is null');
            }
            //convertedMethods.push(convertedChunk);
        } catch (error) {
            logger.logError(`Chunk conversion failed: ${chunk.context}`, error);
            throw new Error('Conversion failed for a chunk'); // Graceful failure
        }
    }

    const reassembledMethods = reassembleChunks(convertedMethods);
    return { methods: [reassembledMethods] };
}

export function reassembleChunks(chunks: string[]): string {
    return chunks.join("\n");
}

function delay(ms: any) {
    console.log('Delaying for', ms, 'ms');
    return new Promise((resolve) => setTimeout(resolve, ms));
}
