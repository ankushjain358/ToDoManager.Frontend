import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router  , ActivatedRoute } from '@angular/router';
import { DataSharingService } from '@app/services/data-sharing.service'

import { TaskModel } from '@app/models/task-model';
import { CategoryModel } from '@app/models/category-model';
import { AlertService } from '@app/services/alert.service';
import { CategoryService } from '@app/services/category.service';
import { TaskService } from '@app/services/task.service';
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

  constructor(private alertService: AlertService, private categoryService: CategoryService,
    private taskService: TaskService, private router: Router,
    private spinner: NgxSpinnerService, private route: ActivatedRoute, private dataSharingService:DataSharingService) { }

  ngOnInit() {
    this.spinner.show();

    let categoryId: number = parseInt(this.route.snapshot.paramMap.get("id"));
    
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
    this.dataSharingService.categoryId = this.categoryDetail.id;
    this.dataSharingService.categoryName = this.categoryDetail.name;
    this.dataSharingService.taskItem = null;
    this.router.navigateByUrl('/user/category/new-task');
  }


  public onCheckboxChange(e: any, item: TaskModel){
    if(e.target.checked){
      
      this.spinner.show();
      
      var subscription =  this.taskService.updateTaskStatus({ TaskId: item.id, IsCompleted: true }).subscribe(()=>{
        this.completedTasks.push(item);

        let indexToRemove = this.pendingTasks.map((item)=> item.id).indexOf(item.id);
        this.pendingTasks.splice(indexToRemove, 1);

        this.alertService.successNotification("Task has been marked as completed successfully.")
      }, (error: ErrorModel) => {
        this.alertService.error(error);
      });

      subscription.add(() => {
        this.spinner.hide();
      });
    }
  };

  public onUndoClick(item: TaskModel){
    this.spinner.show();
      
    var subscription =  this.taskService.updateTaskStatus({ TaskId: item.id, IsCompleted: false }).subscribe(()=>{
      this.pendingTasks.push(item);

      let indexToRemove =this.completedTasks.map((item)=> item.id).indexOf(item.id);
      this.completedTasks.splice(indexToRemove, 1);

      this.alertService.successNotification("Task has been added in pending list successfully.")
    }, (error: ErrorModel) => {
      this.alertService.error(error);
    });

      subscription.add(() => {
        this.spinner.hide();
      });
  };

  public onDeleteTaskClick(item: TaskModel){
    this.spinner.show();

    var subscription =  this.taskService.deleteTasks(item.id).subscribe(()=>{
     
     if(item.isCompleted){
      let indexToRemove = this.completedTasks.map((item) => item.id).indexOf(item.id);
      this.completedTasks.splice(indexToRemove, 1);
     }else{
      let indexToRemove = this.pendingTasks.map((item) => item.id).indexOf(item.id);
      this.pendingTasks.splice(indexToRemove, 1);
     }
      this.alertService.successNotification("Task has been deleted successfully.")
    },(error: ErrorModel) => {
      this.alertService.error(error);
    });

      subscription.add(() => {
        this.spinner.hide();
      });
  }

  public onEditTaskClick(item: TaskModel){
    this.dataSharingService.categoryId = item.categoryId;
    this.dataSharingService.categoryName = this.categoryDetail.name;
    this.dataSharingService.taskItem = item;
    this.router.navigate(['/user/category/edit-task']);
  }
}
