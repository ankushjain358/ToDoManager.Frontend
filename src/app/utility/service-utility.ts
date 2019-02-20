import { Injectable } from '@angular/core';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { ErrorModel } from './../models/error-model';
import { User } from '@app/models/user-model';
import { AppConstants } from './app.constants';
import { LoginResponseModel } from '@app/models/login-response-model'

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
        else if (error.status == 0){

            let errorList:string[] =[
                "You are not connected with internet.",
                "The internet resource you are trying to access is currently down."
            ];
            return throwError(new ErrorModel(500, "Request failed due to following reasons:", errorList));
        }
        else{
            return throwError(new ErrorModel(500, "Something bad happened; please try again later.", null));
        }
    };

    public getCurrentUser(): User {
         if(localStorage.getItem(AppConstants.LocalStorageKey.User)){
           var currentUser=  JSON.parse(localStorage.getItem(AppConstants.LocalStorageKey.User))
           // use of Type Assertion 
           return (<User>currentUser);
         }
         return null;
    }

    public setUserInLocalStorage (response: LoginResponseModel)  {
        localStorage.setItem(AppConstants.LocalStorageKey.User, JSON.stringify(response));
    }


}
