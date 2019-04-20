import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '@app/utility/app.constants';
import { ServiceUtility } from '@app/utility/service-utility'
import { CategoryModel } from '@app/models/category-model';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient, private serviceUtility: ServiceUtility) { }

  public getCategories(): Observable<CategoryModel[]>{
    return this.http.get<CategoryModel[]>(AppConstants.CategoryListAPIUrl, { headers: this.serviceUtility.getPostRequestHeaders() });
  }

  public getCategoryTasks(categoryId: number): Observable<CategoryModel>{
    return this.http.get<CategoryModel>(AppConstants.CategoryDetailAPIUrl + '/' + categoryId, { headers: this.serviceUtility.getPostRequestHeaders() });
  }

  public createCategory(category: CategoryModel):Observable<any>{
    return this.http.post(AppConstants.CreateCategoryAPIUrl,category,{ headers: this.serviceUtility.getPostRequestHeaders() } );
  }

  public updateCategory(category: CategoryModel):Observable<any>{
    return this.http.post(AppConstants.UpdateCategoryAPIUrl,category,{ headers: this.serviceUtility.getPostRequestHeaders() } );
  }

  public deleteCategory(id: number):Observable<any>{
    return this.http.delete(AppConstants.DeleteCategoryAPIUrl + '/' + id, { headers: this.serviceUtility.getPostRequestHeaders() });
  }
}
