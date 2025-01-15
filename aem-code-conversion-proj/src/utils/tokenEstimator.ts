import * as tiktoken from 'tiktoken';

// export function estimateTokens(content: string): number {
//     // Simple token estimation (can be replaced with more accurate logic)
//     return content.split(/\s+/).length;
// }

export const TOKEN_LIMIT = 4096; // Example token limit

// New method converted from Python to TypeScript
export function estimateTokens(methodContent: string): number {
    //console.log('inside estimateTokens');

    // Initialize the tokenizer for the GPT-4o model
    const tokenizer = tiktoken.encoding_for_model("gpt-4o");

    // Encode the Java code to get the tokens
    const tokens = tokenizer.encode(methodContent);
    //console.log('tokens are', tokens);

    tokenizer.free();
    
    // Return the number of tokens
    return tokens.length;
}
