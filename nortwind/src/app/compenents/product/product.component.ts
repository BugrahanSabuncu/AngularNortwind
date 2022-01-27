import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  /* product1 = {
    productId: 1,
    productName: 'Bardak',
    categoryId: 1,
    unitPrice: 5,
    unitsInStock:5,
  };
  product2 = {
    productId: 2,
    productName: 'Laptop',
    categoryId: 1,
    unitPrice: 5,
    unitsInStock:6,
  };
  product3 = {
    productId: 3,
    productName: 'Mouse',
    categoryId: 1,
    unitPrice: 5,
    unitsInStock:10,
  };
  product4 = {
    productId: 4,
    productName: 'Keyboard',
    categoryId: 1,
    unitPrice: 5,
    unitsInStock:20,
  };
  product5 = {
    productId: 5,
    productName: 'Camera',
    categoryId: 1,
    unitPrice: 5,
    unitsInStock:40,
  };*/
  //any her tip olur demek süslü parantezlede obje yaptık
  /*interface verildiğinde alan uyuşmazlığı hataya sebep olur fakat
  any kullanıldıysa bu hata alınmaz*/

  /*products:Product[] = [
    this.product1,
    this.product2,
    this.product3,
    this.product4,
    this.product5,
  ];*/
  products: Product[] = [];
  dataLoaded = false;
  /*productResponsModel:ProductResponceModel={
    data:this.products,
    message:"",
    success:true
  }*/
  constructor(private productService: ProductService,
    private activetedRoot:ActivatedRoute) {}

  ngOnInit(): void {
    this.activetedRoot.params.subscribe(params => {
      if(params["categoryId"]){
        this.getProductsByCategory(params["categoryId"])
      }else{
        this.getProducts()
      }
    })
  }

  getProducts() {
    this.productService.getProducts().subscribe((responce) => {
      this.products = responce.data;
      this.dataLoaded = true;
    });
  }
  getProductsByCategory(categoryId:number) {
    this.productService.getProductsByCategory(categoryId).subscribe((responce) => {
      this.products = responce.data;
      this.dataLoaded = true;
    });
  }
}
