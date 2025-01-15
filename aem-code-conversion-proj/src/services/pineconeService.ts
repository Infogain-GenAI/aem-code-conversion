import { Metadata, ConvertedFile } from "../types/types";

export function storeMetadataInPinecone(metadata: Metadata): void {
    // Store metadata in Pinecone
   // console.log("Metadata stored in Pinecone:", metadata);
}

export function storeConvertedFileInPinecone(file: ConvertedFile): void {
    // Store the converted file in Pinecone
    console.log("Converted file stored in Pinecone:", file);
}
