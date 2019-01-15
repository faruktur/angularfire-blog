import { Component, OnInit } from '@angular/core';
import { Post } from 'src/models/post';
import { PostService } from '../../shared/services/post/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts:Post[]=[];
  constructor(private postService:PostService,private router:Router) {
    this.postService.getAll().subscribe(posts=>{this.posts=posts;});
   }

  ngOnInit() {
  }
   
  delete(p:Post){
    this.postService.delete(p.$key);
  }
  

}
