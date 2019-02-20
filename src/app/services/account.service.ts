import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '@app/utility/app.constants';

import { LoginModel } from './../models/login-model'
import { LoginResponseModel } from './../models/login-response-model'

import { ServiceUtility } from '@app/utility/service-utility'
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient, private serviceUtility: ServiceUtility) {
  }

  public login(loginModel: LoginModel): Observable<LoginResponseModel> {
    return this.http.post<LoginResponseModel>(AppConstants.LoginAPIUrl, JSON.stringify(loginModel), { headers: this.serviceUtility.getPostRequestHeaders() });
  }


}
