export function updateProgressUI(progress: number, failedFiles: string[]): void {
    console.log(`Progress: ${progress}%`);
    if (failedFiles.length > 0) {
        console.log("Failed files:", failedFiles);
    }
}
