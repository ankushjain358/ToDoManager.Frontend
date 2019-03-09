import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountLayoutComponent } from './components/account/account-layout/account-layout.component';
import { LoginComponent } from './components/account/login/login.component';
import { RegisterComponent } from './components/account/register/register.component';

import { UserLayoutComponent } from './components/user/user-layout/user-layout.component';
import { CategoryComponent } from './components/user/category/category.component';
import { CreateCategoryComponent } from './components/user/create-category/create-category.component';
import { CategoryDetailComponent } from './components/user/category-detail/category-detail.component';
import { CreateTaskComponent } from './components/user/create-task/create-task.component';

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
      { path: '', redirectTo: 'category', pathMatch: 'full' },
      { path: 'category', component: CategoryComponent },
      { path: 'category/create', component: CreateCategoryComponent },
      { path: 'category/detail/:id', component: CategoryDetailComponent },
      { path: 'category/new-task', component: CreateTaskComponent },
      // { path: 'category/edit-task', component: CreateTaskComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
