import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category/category.service';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {

  categories:any;
  constructor(private categoryService:CategoryService) { 
    this.categories = this.categoryService.getAll();
  }

  ngOnInit() {
  }

}
