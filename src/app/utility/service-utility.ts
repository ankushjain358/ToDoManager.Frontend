import { Injectable } from '@angular/core';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { ErrorModel } from './../models/error-model';

@Injectable({
    providedIn: 'root'
})
export class ServiceUtility {

    public getPostRequestHeaders(): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json',
        });
    }

    public handleError(error: HttpErrorResponse) {
        var errorModel= error.error as ErrorModel;
        if (errorModel) {
            return throwError(errorModel);
        }
        else {
            return throwError(new ErrorModel(500, "Unexpected error occured", null));
        }
    };
}
