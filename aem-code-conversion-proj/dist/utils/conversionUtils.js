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
Object.defineProperty(exports, "__esModule", { value: true });
exports.processChunks = processChunks;
exports.reassembleChunks = reassembleChunks;
const openAIService_1 = require("../services/openAIService");
const loggingService_1 = require("../services/loggingService");
const logger = loggingService_1.LoggingService.getInstance();
function processChunks(chunks) {
    return __awaiter(this, void 0, void 0, function* () {
        let convertedMethods = [];
        for (const chunk of chunks) {
            try {
                yield delay(2000); // Simulate delay
                if (chunk.content && chunk.context) {
                    const convertedChunk = yield (0, openAIService_1.sendToOpenAI)(chunk.content, chunk.context);
                    convertedMethods.push(convertedChunk);
                }
                else {
                    logger.logError(`Chunk content or context is null: ${chunk.context}`);
                    throw new Error('Chunk content or context is null');
                }
                //convertedMethods.push(convertedChunk);
            }
            catch (error) {
                logger.logError(`Chunk conversion failed: ${chunk.context}`, error);
                throw new Error('Conversion failed for a chunk'); // Graceful failure
            }
        }
        const reassembledMethods = reassembleChunks(convertedMethods);
        return { methods: [reassembledMethods] };
    });
}
function reassembleChunks(chunks) {
    return chunks.join("\n");
}
function delay(ms) {
    console.log('Delaying for', ms, 'ms');
    return new Promise((resolve) => setTimeout(resolve, ms));
}
//# sourceMappingURL=conversionUtils.js.map