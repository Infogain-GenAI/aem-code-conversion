"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateMethods = validateMethods;
exports.validateSyntax = validateSyntax;
function validateMethods(methods) {
    methods.forEach(method => {
        if (!validateSyntax(method)) {
            throw new Error(`Syntax error in method: ${method}`);
        }
    });
}
function validateSyntax(content) {
    // Mock implementation: Use a linter or syntax parser to validate syntax
    // Use a linter or syntax parser to validate syntax
    return true; // Assume valid for now
}
//# sourceMappingURL=validationUtils.js.map