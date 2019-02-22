import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from "@angular/router"
import { NgForm } from '@angular/forms';

import { AlertService } from '@app/services/alert.service';
import { TaskListService } from '@app/services/task-list.service';
import { ServiceUtility } from '@app/utility/service-utility';
import { TaskListModel } from '@app/models/task-list-model'
import { ErrorModel } from '@app/models/error-model'


@Component({
  selector: 'app-create-task-list',
  templateUrl: './create-task-list.component.html',
  styleUrls: ['./create-task-list.component.scss']
})
export class CreateTaskListComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService, private router: Router,
    private alertService: AlertService, private serviceUtility: ServiceUtility, private taskListService:TaskListService) { }

  newItem: TaskListModel;

  ngOnInit() {
    this.newItem = {} as TaskListModel;
  }

  onSubmit(appForm: NgForm) {

    if (appForm.valid) {
      this.spinner.show();

      var subscription = this.taskListService.createTaskList(this.newItem)
        .subscribe(() => {
      
          // 1. redirect to user page
          this.router.navigate(['/user/task-list']);
          // 2. hide the spinner
          this.spinner.hide();

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
