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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TOKEN_LIMIT = void 0;
exports.estimateTokens = estimateTokens;
const tiktoken = __importStar(require("tiktoken"));
// export function estimateTokens(content: string): number {
//     // Simple token estimation (can be replaced with more accurate logic)
//     return content.split(/\s+/).length;
// }
exports.TOKEN_LIMIT = 4096; // Example token limit
// New method converted from Python to TypeScript
function estimateTokens(methodContent) {
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
//# sourceMappingURL=tokenEstimator.js.map