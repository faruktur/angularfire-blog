import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from '../../services/category/category.service';
import { Observable } from 'rxjs';
import { Category } from 'src/models/category';

@Component({
  selector: 'app-posts-filter',
  templateUrl: './posts-filter.component.html',
  styleUrls: ['./posts-filter.component.css']
})
export class PostsFilterComponent implements OnInit {

  categories$:Observable<Category[]>;
  @Input('category') category:Category;
  constructor(private categoryService:CategoryService) { 
    this.categories$ = this.categoryService.getAll();
  }

  ngOnInit() {
  }

}
