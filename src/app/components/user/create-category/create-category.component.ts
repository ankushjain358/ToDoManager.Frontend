import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from "@angular/router"
import { NgForm } from '@angular/forms';

import { AlertService } from '@app/services/alert.service';
import { CategoryService } from '@app/services/category.service';
import { ServiceUtility } from '@app/utility/service-utility';
import { CategoryModel } from '@app/models/category-model'
import { ErrorModel } from '@app/models/error-model'


@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService, private router: Router,
    private alertService: AlertService, private serviceUtility: ServiceUtility, private categoryService:CategoryService) { }

  newItem: CategoryModel;

  ngOnInit() {
    this.newItem = {} as CategoryModel;
  }

  onSubmit(appForm: NgForm) {

    if (appForm.valid) {
      this.spinner.show();

      var subscription = this.categoryService.createCategory(this.newItem)
        .subscribe(() => {
      
          // 1. redirect to user page
          this.router.navigate(['/user/category']);
          // 2. hide the spinner
          this.spinner.hide();
          // 3. show success notification
          this.alertService.success("Category has been added successfully.")


        }, (error: ErrorModel) => {
            this.alertService.error(error);
          });

      subscription.add(() => {
        this.spinner.hide();
      })

      setTimeout(() => this.spinner.hide(), 3000);
    }
  }

}
