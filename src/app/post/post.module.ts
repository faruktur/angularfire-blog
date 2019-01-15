import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PostFormComponent } from './post-form/post-form.component';
import { PostListComponent } from './post-list/post-list.component';
import { FormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AngularEditorModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'posts/retrieve/:id',component:PostFormComponent},
      {path:'posts/index',component:PostListComponent},
      {path:'posts/index/:categoryID',component:PostListComponent},
    ]),
  ],
  
  declarations: [
    PostFormComponent,
    PostListComponent,
  ]
})
export class PostModule { }
