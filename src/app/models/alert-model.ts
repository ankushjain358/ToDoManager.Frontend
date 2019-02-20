import { ErrorModel } from '@app/models/error-model'

export class AlertModel {

    constructor(success: boolean, message:string, error: ErrorModel, useToastr: boolean) {
        this.success = success;
        this.message = message;
        this.error = error;
        this.useToastr = useToastr;
    }

    public success: boolean;
    public message: string;
    public error: ErrorModel;
    public useToastr: boolean;
}
