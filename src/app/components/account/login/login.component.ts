import { Component, OnInit, Input } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from "@angular/router"

import { LoginModel } from './../../../models/login-model'
import { NgForm } from '@angular/forms';
import { AccountService } from './../../../services/account.service';
import { AlertService } from '@app/services/alert.service';
import { ServiceUtility } from '@app/utility/service-utility';
import { LoginResponseModel } from 'src/app/models/login-response-model';
import { ErrorModel } from '@app/models/error-model'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private accountService: AccountService, private spinner: NgxSpinnerService, private router: Router,
    private alertService: AlertService, private serviceUtility: ServiceUtility) {
  }
  error: ErrorModel;
  model: LoginModel;
  submitted: boolean;

  onSubmit(loginForm: NgForm) {

    if (loginForm.valid) {

      this.submitted = true;
      this.spinner.show();

      var subscription = this.accountService.login(this.model)
        .subscribe((response: LoginResponseModel) => {
        
          // 1. save user in localstorage
          this.serviceUtility.setUserInLocalStorage(response);
          // 2. redirect to user page
          this.router.navigate(['user']);
          // 3. hide the spinner
          this.spinner.hide();

        }, (error: ErrorModel) => {
            this.alertService.error(error);
          });

      subscription.add(() => {
        this.submitted = false;
        this.spinner.hide();
      })
    }
  }

  ngOnInit() {
    this.model = {} as LoginModel;
  }

}
