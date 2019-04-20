import { Injectable } from '@angular/core';
import { reduce } from 'rxjs/operators';
import { TaskModel } from '@app/models/task-model';
import { CategoryModel } from '@app/models/category-model';

@Injectable({
  providedIn:"root"
})
export class DataSharingService {

  public categoryId: number;
  public categoryName: string;
  public taskItem: TaskModel = null
  public categoryItem: CategoryModel = null;

  constructor() { }
}

