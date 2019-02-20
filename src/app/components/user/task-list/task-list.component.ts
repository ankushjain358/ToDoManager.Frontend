import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

import {ServiceUtility} from '@app/utility/service-utility';
import { TaskListService } from '@app/services/task-list.service';
import { AlertService } from '@app/services/alert.service';
import{ TaskListModel} from '@app/models/task-list-model';
import { ErrorModel } from '@app/models/error-model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  public  taskList:TaskListModel[];

  constructor(private taskListService: TaskListService,
    private serviceUtility:ServiceUtility, 
    private alertService: AlertService,
    private spinner: NgxSpinnerService) { }

  ngOnInit() {
    
    this.spinner.show();

    let userId: number=this.serviceUtility.getCurrentUser().id;
  
    var subscription= this.taskListService.getTaskList(userId).subscribe((response)=>{
      this.taskList = response;
    },(error: ErrorModel) => {
      this.alertService.error(error);
    });
    
    subscription.add(() => {
      this.spinner.hide();
    });
  }

}
