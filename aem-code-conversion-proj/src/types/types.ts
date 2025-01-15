import { JavaMetadata } from './JavaMetadata'

export interface File {
    name: string;
    content: string;
}

export interface Metadata {
    fileName: string;
    methods: MethodMetadata[];
    ast?: string;

}

export interface MethodMetadata {
    methodName: string;
    start: number;
    end: number;
}

export interface Chunk {
    content: string;
    context: string | null;
}

export interface ConvertedFile {
    methods: string[];
}


