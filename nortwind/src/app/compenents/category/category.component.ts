import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories:Category[]=[];
  dataLoaded=false;
  currentCategory:Category;
  clearCategory:Category;
  

  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getCategory();
  }
  getCategory(){
    this.categoryService.getCategory().subscribe(responce => {
      this.categories=responce.data
      this.dataLoaded=true;
    })   

  }
  setCurrentCategory(category:Category){
    this.currentCategory=category;
  }

  getCurrentCategoryClass(category:Category){
    if(category==this.currentCategory){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }

  }
  getAllCategoryClass(){
    if(!this.currentCategory){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }

}
