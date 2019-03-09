import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from "@angular/router"

import { RegisterModel } from '@app/models/register-model'
import { NgForm } from '@angular/forms';
import { AccountService } from './../../../services/account.service';
import { AlertService } from '@app/services/alert.service';
import { ServiceUtility } from '@app/utility/service-utility';
import { LoginResponseModel } from 'src/app/models/login-response-model';
import { ErrorModel } from '@app/models/error-model'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private accountService: AccountService, private spinner: NgxSpinnerService, private router: Router,
    private alertService: AlertService, private serviceUtility: ServiceUtility) {
  }

  error: ErrorModel;
  model: RegisterModel;

  onSubmit(appForm: NgForm) {

    if (appForm.valid) {

      this.spinner.show();

      var subscription = this.accountService.register(this.model)
        .subscribe(() => {
        
          // 1. redirect user to login page
          this.router.navigate(['account/login']);
          // 2. hide the spinner
          this.spinner.hide();
          // 3. show success notification
          this.alertService.success("Congratulation!! Your account has been created successfuly.")

        }, (error: ErrorModel) => {
            this.alertService.error(error);
          });

      subscription.add(() => {
        this.spinner.hide();
      })
    }
  }

  ngOnInit() {
    this.model = {} as RegisterModel;
  }

}
