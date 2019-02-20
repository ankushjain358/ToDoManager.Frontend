import { Injectable } from '@angular/core';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { ErrorModel } from './../models/error-model';
import { User } from '@app/models/user-model';
import { AppConstants } from './app.constants';

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
        var errorModel= error.error;
        if (errorModel && errorModel.statusCode) {
            return throwError(errorModel as ErrorModel);
        }
        else{
            return throwError(new ErrorModel(500, "Something bad happened; please try again later.", null));
        }
    };

    public getCurrentUser(): User {
         if(localStorage.getItem(AppConstants.LocalStorageKey.User)){
           var currentUser=  JSON.parse(localStorage.getItem(AppConstants.LocalStorageKey.User))
           return <User>currentUser;
         }
         return null;
    }
}
