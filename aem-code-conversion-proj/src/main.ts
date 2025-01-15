import { File,Metadata } from "./types/types";
import { extractMetadata } from "./utils/metadataUtils";
import { chunkMethodsByTokenLimit } from "./utils/chunkingUtil";
import { processChunks } from "./utils/conversionUtils";
import { validateMethods } from "./utils/validationUtils";
import { storeMetadataInPinecone, storeConvertedFileInPinecone } from "./services/pineconeService";
import { updateProgressUI } from "./ui/progressUI";
import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';
import { exit } from "process";



dotenv.config();

/**
 * Process a single file, handling metadata extraction, chunking, conversion, and validation.
 * @param file - The file to process.
 */
async function processFile(file: File): Promise<void> {
    try {
        console.log(`Processing file: ${file.name}`);

        // Step 1: Extract metadata
        const metadata = extractMetadata(file);
        
       
        storeMetadataInPinecone(metadata);

        // Step 2: Chunk methods by token limit
        if (!metadata.ast) {
            throw new Error(`AST is undefined for file: ${file.name}`);
        }
        const chunks = await chunkMethodsByTokenLimit(metadata, metadata.ast, file.content);
        console.log('chunks in processFile ', chunks.length);

        // Step 3: Process chunks and reassemble methods
        const convertedFile = await processChunks(chunks);

        // write the convertedFile to a file in file system
       fs.writeFileSync(path.join(process.env.CONVERTED_FILES_PATH || 'C:/Users/sumeet.patil/Desktop/JavaClasses/ConvertedFiles', file.name+'converted.txt'), convertedFile.methods.join('\n'));

        // Step 4: Validate methods for correctness
        validateMethods(convertedFile.methods);

        // Step 5: Store the final converted file in Pinecone
       storeConvertedFileInPinecone(convertedFile);

        console.log(`File processed successfully: ${file.name}`);
    } catch (error) {
        console.error(`Processing failed for file: ${file.name}`, error);
    }
}

/**
 * Main function to process multiple files.
 * @param files - Array of files to process.
 */
async function main(files: File[]): Promise<void> {
    let progress = 0;
    const failedFiles: string[] = [];

    for (const file of files) {
        try {
            await processFile(file);
        } catch {
            failedFiles.push(file.name);
        } finally {
            progress += (1 / files.length) * 100;
            updateProgressUI(progress, failedFiles);
        }
    }

    if (failedFiles.length > 0) {
        console.log("The following files failed to process:", failedFiles);
    } else {
        console.log("All files processed successfully!");
    }
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
