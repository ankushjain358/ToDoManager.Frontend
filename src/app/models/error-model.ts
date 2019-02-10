export class ErrorModel {

    public statusCode: number;
    public errorMessage: string;
    public errors: string[]

    constructor(statusCode: number, message: string, errors: string[]) {
        this.statusCode = statusCode;
        this.errorMessage = message;
        this.errors= errors;
    }
}
