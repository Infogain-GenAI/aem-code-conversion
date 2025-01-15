"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggingService = void 0;
class LoggingService {
    constructor() {
        // Private constructor to prevent direct instantiation
    }
    static getInstance() {
        if (!LoggingService.instance) {
            LoggingService.instance = new LoggingService();
        }
        return LoggingService.instance;
    }
    logInfo(message) {
        console.log(`[INFO] ${new Date().toISOString()}: ${message}`);
    }
    logDebug(message) {
        console.debug(`[DEBUG] ${new Date().toISOString()}: ${message}`);
    }
    logWarning(message) {
        console.warn(`[WARNING] ${new Date().toISOString()}: ${message}`);
    }
    logError(message, error) {
        console.error(`[ERROR] ${new Date().toISOString()}: ${message}`, error);
    }
}
exports.LoggingService = LoggingService;
//# sourceMappingURL=loggingService.js.map