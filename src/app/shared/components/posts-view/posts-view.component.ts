import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post/post.service';
import { Post } from 'src/models/post';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Pager } from 'src/models/Pager';
import { PagerService } from '../../services/pager/pager.service';

@Component({
  selector: 'app-posts-view',
  templateUrl: './posts-view.component.html',
  styleUrls: ['./posts-view.component.css']
})
export class PostsViewComponent implements OnInit {

  posts: Post[] = [];
  filteredPosts: Post[] = [];
  category: string;
  datedeneme:any = new Date(Date.now());
  private allItems: any[];
  pager: any = {};

  // paged items
  pagedItems: any[];
  constructor(
    private pagerService: PagerService,
    private postService: PostService,
    private activatedRoute: ActivatedRoute) {
    this.postService.getAll().subscribe(posts => {

      /// TODO Re-Factoring    switchMap(c=> route.): : subscribe
      this.posts = posts;
      this.activatedRoute.queryParamMap.subscribe(params => {
        var id = params.get('category');
        this.category = id;
        if (id) this.filteredPosts = this.posts.filter(p => p.category == id);
        else this.filteredPosts = this.posts;

        this.allItems = this.filteredPosts;
        this.setPage(1);
        console.log('pager', this.pager);
      });
    });


  }
  search(src:string) {
    src = src.toLowerCase();
    if (src.length==0) this.allItems = this.filteredPosts = this.posts;
    else {
      this.allItems= this.posts
        .filter(p =>
          p.title.toLowerCase().includes(src) || p.description.toLowerCase().includes(src)  || p.category.toLowerCase().includes(src));
    }
    this.setPage(1);
    console.log('src',src);
  }


  ngOnInit() { }

  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.allItems.length, page);

    // get current page of items
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

}
