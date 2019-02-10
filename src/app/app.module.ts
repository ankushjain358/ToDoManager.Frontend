import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AccountLayoutComponent } from './components/account/account-layout/account-layout.component';
import { UserLayoutComponent } from './components/user/user-layout/user-layout.component';
import { LoginComponent } from './components/account/login/login.component';
import { RegisterComponent } from './components/account/register/register.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountLayoutComponent,
    UserLayoutComponent,
    LoginComponent,
    RegisterComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
