import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountLayoutComponent } from './components/account/account-layout/account-layout.component';
import { LoginComponent } from './components/account/login/login.component';
import { RegisterComponent } from './components/account/register/register.component';

import { UserLayoutComponent } from './components/user/user-layout/user-layout.component';

const routes: Routes = [
  { path: '', redirectTo: '/account/login', pathMatch: 'full' },
  {
    path: 'account', component: AccountLayoutComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ]
  },
  { path: 'user', component: UserLayoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
