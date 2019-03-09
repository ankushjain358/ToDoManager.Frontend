import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  public categoryId: number;
  public categoryName: string;

  constructor() { }
}
