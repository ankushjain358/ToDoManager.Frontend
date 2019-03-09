import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '@app/utility/app.constants';
import { ServiceUtility } from '@app/utility/service-utility'
import { TaskModel } from '@app/models/task-model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient, private serviceUtility: ServiceUtility) { }

  public createTask(task: TaskModel):Observable<any>{
    return this.http.post(AppConstants.CreateTaskAPIUrl,task,{ headers: this.serviceUtility.getPostRequestHeaders() } );
  }
}
