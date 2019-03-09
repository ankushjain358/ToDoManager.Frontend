import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router  , ActivatedRoute } from '@angular/router';
import { DataSharingService } from '@app/services/data-sharing.service'

import { TaskModel } from '@app/models/task-model';
import { CategoryModel } from '@app/models/category-model';
import { AlertService } from '@app/services/alert.service';
import { CategoryService } from '@app/services/category.service';
import { ErrorModel } from '@app/models/error-model';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss']
})
export class CategoryDetailComponent implements OnInit {

  public categoryDetail: CategoryModel = {} as CategoryModel;
  public pendingTasks: TaskModel[];
  public completedTasks: TaskModel[];

  constructor(private alertService: AlertService, private categoryService: CategoryService, private router: Router,
    private spinner: NgxSpinnerService, private route: ActivatedRoute, private dataSharingService:DataSharingService) { }

  ngOnInit() {
    this.spinner.show();

    let categoryId: number = parseInt( this.route.snapshot.paramMap.get("id"));
    
    var subscription= this.categoryService.getCategoryTasks(categoryId).subscribe((response)=>{
      this.categoryDetail = response;
      this.pendingTasks = response.taskList.filter(x => !x.isCompleted);
      this.completedTasks = response.taskList.filter(x => x.isCompleted);
    
    },(error: ErrorModel) => {
      this.alertService.error(error);
    });
    
    subscription.add(() => {
      this.spinner.hide();
    });
  }

  addNewTask(){
    debugger
    this.dataSharingService.categoryId = this.categoryDetail.id;
    this.dataSharingService.categoryName = this.categoryDetail.name;
    this.router.navigateByUrl('/user/category/new-task');
  }

}
