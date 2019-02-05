import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from "@angular/router"

import { LoginModel } from './../../models/login-model'
import { NgForm } from '@angular/forms';
import { AccountService } from './../../services/account.service';
import { LoginResponseModel } from 'src/app/models/login-response-model';
import { ErrorModel } from './../../models/error-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private accountService: AccountService, private spinner: NgxSpinnerService, private router: Router) {
    // this.model = new Login();
  }

  model: LoginModel;
  submitted: boolean

  onSubmit(loginForm: NgForm) {
    if (loginForm.valid) {

      this.submitted = true;
      this.spinner.show();

      var subscription = this.accountService.login(this.model).subscribe((response: LoginResponseModel) => {
        this.router.navigate(['user']);
      }, (error: ErrorModel) => {
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
