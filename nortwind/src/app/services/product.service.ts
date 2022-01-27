import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListResponceModel } from '../Models/listResponceModel';  
import { Observable } from 'rxjs';
import { Product } from '../Models/product';

@Injectable({
  //injection yapısı buradan service olduğunu anlıyoruz.
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'https://localhost:44357/api/';
  constructor(private httpClient: HttpClient) {}

  getProducts():Observable<ListResponceModel<Product>> {
    let newPath=this.apiUrl+"products/getall";
    return this.httpClient.get<ListResponceModel<Product>>(newPath);
  }
  getProductsByCategory(categoryId:number):Observable<ListResponceModel<Product>> {
    let newPath=this.apiUrl+"products/getbycategory?categoryId="+categoryId;
    return this.httpClient.get<ListResponceModel<Product>>(newPath);
  }
}
