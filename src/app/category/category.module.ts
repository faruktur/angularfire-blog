import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryFormModalComponent } from './category-form-modal/category-form-modal.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path:'categories',component:CategoryListComponent}
    ])
  ],
  declarations: [
    CategoryListComponent,
    CategoryFormModalComponent,
  ]
})
export class CategoryModule { }
