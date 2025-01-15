export class LoggingService {

    private static instance: LoggingService;

    private constructor() {
        // Private constructor to prevent direct instantiation
    }

    public static getInstance(): LoggingService {
        if (!LoggingService.instance) {
            LoggingService.instance = new LoggingService();
        }
        return LoggingService.instance;
    }

    logInfo(message: string): void {
        console.log(`[INFO] ${new Date().toISOString()}: ${message}`);
    }

    logDebug(message: string): void {
        console.debug(`[DEBUG] ${new Date().toISOString()}: ${message}`);
    }

    logWarning(message: string): void {
        console.warn(`[WARNING] ${new Date().toISOString()}: ${message}`);
    }


    logError(message: string, error?: any): void {
        console.error(`[ERROR] ${new Date().toISOString()}: ${message}`, error);
    }

}
