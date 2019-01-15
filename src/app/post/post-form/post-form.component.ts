import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/models/category';
import { CategoryService } from '../../shared/services/category/category.service';
import { PostService } from '../../shared/services/post/post.service';
import { Post } from 'src/models/post';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  categories:Category[]=[];
  form:Post=new Post();
  constructor(private categoryService:CategoryService,
    private authService:AuthService,
    private router:Router,
    private postService:PostService,
    private activatedRoute:ActivatedRoute) {
    this.categoryService.getAll().subscribe(list=>{this.categories=list as Category[]});
    this.activatedRoute.paramMap.subscribe(params=>{
      
      var id = params.get('id');
      if(id){
        this.postService.getById(id).subscribe(post=>{
          this.form=post;
        })
      }
    });
   }

  ngOnInit() {
  }
  Save(post:any){
    this.authService.appUser$.subscribe(user=>{
      post.owner = user.name;
    })
    if(this.form.$key.length<4) this.postService.create(post);
    else this.postService.update(this.form.$key,post);
    this.form = new Post();
    alert('Post Saved.');
    this.router.navigate(['/posts/index']);
  }

}
