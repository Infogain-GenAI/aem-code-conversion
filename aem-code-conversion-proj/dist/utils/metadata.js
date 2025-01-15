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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const parser_1 = require("@babel/parser"); // For Java syntax parsing
const traverse_1 = __importDefault(require("@babel/traverse"));
// Function to generate metadata
function generateMetadata(filePath) {
    return __awaiter(this, void 0, void 0, function* () {
        const fileContent = fs_1.default.readFileSync(filePath, 'utf-8');
        const methods = [];
        // Parse the file into an AST
        const ast = (0, parser_1.parse)(fileContent, {
            sourceType: 'module',
            plugins: ['typescript', 'jsx'],
        });
        // Traverse the AST and extract method details
        (0, traverse_1.default)(ast, {
            ClassMethod(path) {
                var _a, _b, _c, _d, _e;
                const methodName = (_a = path.node.key) === null || _a === void 0 ? void 0 : _a.name;
                const start = (_c = (_b = path.node.loc) === null || _b === void 0 ? void 0 : _b.start.line) !== null && _c !== void 0 ? _c : 0;
                const end = (_e = (_d = path.node.loc) === null || _d === void 0 ? void 0 : _d.end.line) !== null && _e !== void 0 ? _e : 0;
                if (methodName) {
                    methods.push({ methodName, start, end });
                }
            },
            ObjectMethod(path) {
                var _a, _b, _c, _d, _e;
                const methodName = (_a = path.node.key) === null || _a === void 0 ? void 0 : _a.name;
                const start = (_c = (_b = path.node.loc) === null || _b === void 0 ? void 0 : _b.start.line) !== null && _c !== void 0 ? _c : 0;
                const end = (_e = (_d = path.node.loc) === null || _d === void 0 ? void 0 : _d.end.line) !== null && _e !== void 0 ? _e : 0;
                if (methodName) {
                    methods.push({ methodName, start, end });
                }
            },
        });
        return methods;
    });
}
//# sourceMappingURL=metadata.js.map