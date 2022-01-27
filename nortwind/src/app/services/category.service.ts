import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponceModel } from '../Models/listResponceModel';
import { Category } from '../Models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl="https://localhost:44357/api/Categories/getall"

  constructor(private httpClient:HttpClient) { }

  getCategory():Observable<ListResponceModel<Category>>{
    return this.httpClient.get<ListResponceModel<Category>>(this.apiUrl);

  }
}
