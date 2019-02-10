import { Component, OnInit, Input } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from "@angular/router"

import { LoginModel } from './../../../models/login-model'
import { NgForm } from '@angular/forms';
import { AccountService } from './../../../services/account.service';
import { LoginResponseModel } from 'src/app/models/login-response-model';
import { ErrorModel } from './../../../models/error-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private accountService: AccountService, private spinner: NgxSpinnerService, private router: Router) {
    // this.model = new Login();
  }

  error: ErrorModel;
  model: LoginModel;
  submitted: boolean;

  onSubmit(loginForm: NgForm) {
    
    //to clear previously visible errors
    this.error = null;

    if (loginForm.valid) {

      this.submitted = true;
      this.spinner.show();

      var subscription = this.accountService.login(this.model).subscribe((response: LoginResponseModel) => {
        this.router.navigate(['user']);
      }, (error: ErrorModel) => {
        this.error = error;
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
