import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './services/user/user.service';
import { AuthService } from './services/auth/auth.service';
import { CategoryService } from './services/category/category.service';
import { PostService } from './services/post/post.service';
import { BsNavbarComponent } from './components/bs-navbar/bs-navbar.component';
import { BsHeaderComponent } from './components/bs-header/bs-header.component';
import { PagerService } from './services/pager/pager.service';
import { PostsViewComponent } from './components/posts-view/posts-view.component';
import { PostSingleComponent } from './components/post-single/post-single.component';
import { PostsFilterComponent } from './components/posts-filter/posts-filter.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    
    RouterModule.forChild([
      { path:'', component: LoginComponent },
      {path:"posts/view",component:PostsViewComponent},
      {path:"posts/view/:id",component:PostSingleComponent}
    ])
  ],
  declarations: [
    LoginComponent,
    BsNavbarComponent,
    BsHeaderComponent,
    PostsFilterComponent,
    PostsViewComponent,
    PostSingleComponent,
    PostCardComponent,
  ],
  providers: [
    UserService,
    AuthService,
    CategoryService,
    PostService,
    PagerService
  ],
  exports:[
    BsHeaderComponent,
    BsNavbarComponent,
    PostsFilterComponent,
    PostsFilterComponent,
    PostsViewComponent,
    PostSingleComponent,
    PostCardComponent
  ]
})
export class SharedModule { }
