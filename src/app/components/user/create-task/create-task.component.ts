import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router  , ActivatedRoute } from '@angular/router';
import { DataSharingService } from '@app/services/data-sharing.service'
import { NgForm } from '@angular/forms';

import { TaskModel } from '@app/models/task-model';
import { AlertService } from '@app/services/alert.service';
import { TaskService } from '@app/services/task.service';
import { ServiceUtility } from '@app/utility/service-utility';
import { ErrorModel } from '@app/models/error-model';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {

  constructor(private alertService: AlertService, private serviceUtility: ServiceUtility, private router: Router,
    private spinner: NgxSpinnerService, private dataSharingService:DataSharingService,
    private taskService: TaskService) { }

  categoryName:string;
  newItem: TaskModel;

  ngOnInit() {
    this.newItem = {} as TaskModel;

    if (this.dataSharingService.categoryId) {
      this.categoryName = this.dataSharingService.categoryName;
      this.newItem.categoryId = this.dataSharingService.categoryId;
    }
    else {
      this.serviceUtility.triggerLogout();
    }
  }

  onSubmit(appForm: NgForm) {
  debugger
    if (appForm.valid) {
      this.spinner.show();

      var subscription = this.taskService.createTask(this.newItem)
        .subscribe(() => {
      
          // 1. redirect to category detail page
          this.router.navigate(['/user/category/detail/'+this.newItem.categoryId]);
          // 2. hide the spinner
          this.spinner.hide();
          // 3. show success notification
          this.alertService.success("Task has been added successfully.")


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
