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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenAIService = void 0;
exports.sendToOpenAI = sendToOpenAI;
const openai_1 = __importDefault(require("openai"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const API_KEY = process.env.OPENAI_API_KEY;
const api_model = (_b = (_a = process.env.MODEL) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : 'gpt-4o';
class OpenAIService {
    static generateText(prompt, fileContent, context) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, e_1, _b, _c;
            var _d, _e;
            const userPrompt = `Refactor this chunk of code which is part of the class MyAccountServlet.java to be compatible with AEM Cloud as a Service (AEMCaaS). This is chunk + ${context}. MyAccountServlet.java includes the following methods:
          1. @Override
            protected void doPost(SlingHttpServletRequest request, SlingHttpServletResponse response)
          2. public boolean isvalidPassword(String pass_word)`;
            //prompt = prompt + '\n' + userPrompt;
            const openai = new openai_1.default({
                apiKey: API_KEY,
                timeout: 120000,
            });
            try {
                const stream = yield openai.chat.completions.create({
                    model: api_model,
                    messages: [
                        {
                            role: 'system',
                            name: 'AEM_expert',
                            content: prompt,
                        },
                        {
                            role: 'user',
                            name: 'AEM_developer',
                            content: userPrompt + '\n' + fileContent,
                        },
                    ],
                    temperature: 0,
                    top_p: 1,
                    stream: true,
                });
                let response = '';
                try {
                    for (var _f = true, stream_1 = __asyncValues(stream), stream_1_1; stream_1_1 = yield stream_1.next(), _a = stream_1_1.done, !_a; _f = true) {
                        _c = stream_1_1.value;
                        _f = false;
                        const part = _c;
                        response += ((_e = (_d = part.choices[0]) === null || _d === void 0 ? void 0 : _d.delta) === null || _e === void 0 ? void 0 : _e.content) || "";
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (!_f && !_a && (_b = stream_1.return)) yield _b.call(stream_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                return response;
            }
            catch (error) {
                console.error('Error generating text from OpenAI:', error);
                throw new Error('Failed to generate text');
            }
        });
    }
}
exports.OpenAIService = OpenAIService;
function sendToOpenAI(content, context) {
    return __awaiter(this, void 0, void 0, function* () {
        // Mock implementation: Replace with actual OpenAI API call
        const javacontent = content;
        const javacontext = context;
        const systemUserDefinition = process.env.SYSTEM_USER_DEF;
        //const prompt = context ? `Context: ${context}\n${content}` : content;
        const prompt = systemUserDefinition + '\n' + (javacontext ? `${javacontext}` : '');
        const response = yield OpenAIService.generateText(prompt, javacontent, javacontext);
        console.log('response in sendToOpenAI ', response);
        return response;
    });
}
//# sourceMappingURL=openAIService.js.map