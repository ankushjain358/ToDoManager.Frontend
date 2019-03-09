import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AccountLayoutComponent } from './components/account/account-layout/account-layout.component';
import { UserLayoutComponent } from './components/user/user-layout/user-layout.component';
import { LoginComponent } from './components/account/login/login.component';
import { RegisterComponent } from './components/account/register/register.component';
import { ErrorComponent } from './components/error/error.component';
import { CategoryComponent } from './components/user/category/category.component';
import { AlertComponent } from './components/alert/alert.component';
import { ErrorInterceptor } from '@app/utility/error-interceptor';
import { JwtInterceptor } from '@app/utility/jwt-interceptor';
import { CreateCategoryComponent } from './components/user/create-category/create-category.component';
import { CategoryDetailComponent } from './components/user/category-detail/category-detail.component';
import { CreateTaskComponent } from './components/user/create-task/create-task.component';


@NgModule({
  declarations: [
    AppComponent,
    AccountLayoutComponent,
    UserLayoutComponent,
    LoginComponent,
    RegisterComponent,
    ErrorComponent,
    CategoryComponent,
    AlertComponent,
    CreateCategoryComponent,
    CategoryDetailComponent,
    CreateTaskComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgxSpinnerModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
