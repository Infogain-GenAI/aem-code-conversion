"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
const metadataUtils_1 = require("./utils/metadataUtils");
const chunkingUtil_1 = require("./utils/chunkingUtil");
const conversionUtils_1 = require("./utils/conversionUtils");
const validationUtils_1 = require("./utils/validationUtils");
const pineconeService_1 = require("./services/pineconeService");
const progressUI_1 = require("./ui/progressUI");
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
/**
 * Process a single file, handling metadata extraction, chunking, conversion, and validation.
 * @param file - The file to process.
 */
function processFile(file) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log(`Processing file: ${file.name}`);
            // Step 1: Extract metadata
            const metadata = (0, metadataUtils_1.extractMetadata)(file);
            (0, pineconeService_1.storeMetadataInPinecone)(metadata);
            // Step 2: Chunk methods by token limit
            if (!metadata.ast) {
                throw new Error(`AST is undefined for file: ${file.name}`);
            }
            const chunks = yield (0, chunkingUtil_1.chunkMethodsByTokenLimit)(metadata, metadata.ast, file.content);
            console.log('chunks in processFile ', chunks.length);
            // Step 3: Process chunks and reassemble methods
            const convertedFile = yield (0, conversionUtils_1.processChunks)(chunks);
            // write the convertedFile to a file in file system
            fs.writeFileSync(path.join(process.env.CONVERTED_FILES_PATH || 'C:/Users/sumeet.patil/Desktop/JavaClasses/ConvertedFiles', file.name + 'converted.txt'), convertedFile.methods.join('\n'));
            // Step 4: Validate methods for correctness
            (0, validationUtils_1.validateMethods)(convertedFile.methods);
            // Step 5: Store the final converted file in Pinecone
            (0, pineconeService_1.storeConvertedFileInPinecone)(convertedFile);
            console.log(`File processed successfully: ${file.name}`);
        }
        catch (error) {
            console.error(`Processing failed for file: ${file.name}`, error);
        }
    });
}
/**
 * Main function to process multiple files.
 * @param files - Array of files to process.
 */
function main(files) {
    return __awaiter(this, void 0, void 0, function* () {
        let progress = 0;
        const failedFiles = [];
        for (const file of files) {
            try {
                yield processFile(file);
            }
            catch (_a) {
                failedFiles.push(file.name);
            }
            finally {
                progress += (1 / files.length) * 100;
                (0, progressUI_1.updateProgressUI)(progress, failedFiles);
            }
        }
        if (failedFiles.length > 0) {
            console.log("The following files failed to process:", failedFiles);
        }
        else {
            console.log("All files processed successfully!");
        }
    });
}
// Example usage
// const inputFiles: File[] = [
//     { name: "ExampleFile1.java", content: "public class Example { void method1() {} void method2() {} }" },
//     { name: "ExampleFile2.java", content: "public class AnotherExample { void method() {} }" }
// ];
// create a method to read a directory path from .env file
// pick the files one by one or all at once which ever is the most efficient and call main method
// to process the files
const inputDir = process.env.JAVA_FILES_PATH;
console.log(inputDir);
if (!inputDir) {
    throw new Error("JAVA_FILES_PATH is not defined in the .env file");
}
const files = fs.readdirSync(inputDir)
    .filter(file => file.endsWith('.java')) // Filter only .java files
    .map(file => {
    const fileContent = fs.readFileSync(path.join(inputDir, file), 'utf-8');
    return { name: file, content: fileContent };
});
// Execute the main flow
main(files);
//# sourceMappingURL=main.js.map