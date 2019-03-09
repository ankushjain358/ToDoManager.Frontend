import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

import {ServiceUtility} from '@app/utility/service-utility';
import { CategoryService } from '@app/services/category.service';
import { AlertService } from '@app/services/alert.service';
import{ CategoryModel} from '@app/models/category-model';
import { ErrorModel } from '@app/models/error-model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  public categoryList: CategoryModel[];

  constructor(private categoryService: CategoryService,
    private alertService: AlertService,
    private spinner: NgxSpinnerService) { }

  ngOnInit() {
    
    this.spinner.show();
  
    var subscription= this.categoryService.getCategories().subscribe((response)=>{
      this.categoryList = response;
    },(error: ErrorModel) => {
      this.alertService.error(error);
    });
    
    subscription.add(() => {
      this.spinner.hide();
    });
  }

}
