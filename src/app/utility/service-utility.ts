import { Injectable } from '@angular/core';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError, from } from 'rxjs';
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
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(new ErrorModel(500, 'Something bad happened; please try again later.'));
    };
}
