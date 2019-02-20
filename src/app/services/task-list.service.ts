import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '@app/utility/app.constants';
import { ServiceUtility } from '@app/utility/service-utility'
import { TaskListModel } from '@app/models/task-list-model'

@Injectable({
  providedIn: 'root'
})
export class TaskListService {

  constructor(private http: HttpClient, private serviceUtility: ServiceUtility) { }

  public getTaskList(userId: number): Observable<TaskListModel[]>{
    return this.http.get<TaskListModel[]>(AppConstants.TaskListAPIUrl+'/'+userId, { headers: this.serviceUtility.getPostRequestHeaders() });
  }
}
