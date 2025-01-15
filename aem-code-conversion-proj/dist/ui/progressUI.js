"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProgressUI = updateProgressUI;
function updateProgressUI(progress, failedFiles) {
    console.log(`Progress: ${progress}%`);
    if (failedFiles.length > 0) {
        console.log("Failed files:", failedFiles);
    }
}
//# sourceMappingURL=progressUI.js.map