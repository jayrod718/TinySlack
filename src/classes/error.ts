export class CustomError extends Error {
    details: any;

    constructor(message: string, json: any) {
        if (json && json.message) {
            super(message + ": " + json.message);
        } else {
            super(message);
        }
        this.details = json;
    }
}
