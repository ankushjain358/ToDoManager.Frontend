import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

import {ServiceUtility} from '@app/utility/service-utility';
import { CategoryService } from '@app/services/category.service';
import { AlertService } from '@app/services/alert.service';
import{ CategoryModel} from '@app/models/category-model';
import { ErrorModel } from '@app/models/error-model';
import { DataSharingService } from '@app/services/data-sharing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  public categoryList: CategoryModel[];

  constructor(private categoryService: CategoryService,
    private alertService: AlertService,
    private spinner: NgxSpinnerService, private dataSharingService: DataSharingService, private router:Router) { }

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

  public onAddCategoryClick(){
    this.dataSharingService.categoryItem = null;
    this.router.navigate(['/user/category/create']);
  }

  public onEditCategoryClick(item:CategoryModel){
    this.dataSharingService.categoryItem = item;
    this.router.navigate(['/user/category/edit']);
  }

  public onDeleteCategoryClick(item:CategoryModel){

   this.spinner.show();
  
    var subscription=  this.categoryService.deleteCategory(item.id).subscribe((response)=>{

      let indexToRemove = this.categoryList.map((item)=> item.id).indexOf(item.id);
      this.categoryList.splice(indexToRemove, 1);

      this.alertService.successNotification("Category has been deleted successfully.");

    },(error: ErrorModel) => {
      this.alertService.error(error);
    });
    
    subscription.add(() => {
      this.spinner.hide();
    });
  }
}
