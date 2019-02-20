import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountLayoutComponent } from './components/account/account-layout/account-layout.component';
import { LoginComponent } from './components/account/login/login.component';
import { RegisterComponent } from './components/account/register/register.component';

import { UserLayoutComponent } from './components/user/user-layout/user-layout.component';
import { TaskListComponent } from './components/user/task-list/task-list.component';
import { CreateTaskListComponent } from './components/user/create-task-list/create-task-list.component';

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
  {
    path: 'user', component: UserLayoutComponent,
    children: [
      { path: '', redirectTo: 'task-list', pathMatch: 'full' },
      { path: 'task-list', component: TaskListComponent },
      { path: 'task-list/create', component: CreateTaskListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
