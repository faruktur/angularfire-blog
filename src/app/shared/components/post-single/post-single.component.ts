import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/models/post';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post/post.service';
import { switchMap } from 'rxjs/operators';
import { PostComment } from 'src/models/post-comments';
import { PostCommentItem } from 'src/models/post-comment-item';

@Component({
  selector: 'app-post-single',
  templateUrl: './post-single.component.html',
  styleUrls: ['./post-single.component.css']
})
export class PostSingleComponent implements OnInit {

  @Input('post') post:Post;
  constructor(private activatedRoute:ActivatedRoute,private postService:PostService ) {
    this.activatedRoute.paramMap.pipe(switchMap(params=>{
      var id = params.get('id');
      console.log('params id ',id);
      return this.postService.getById(id);
    })).subscribe(post=>{
      this.post=post;
      this.post.comments = new PostComment(post.comments as {}).items; 
      this.post.comments.map(c=>{
        c.reply = this.getReply(c);
      });
      console.log('post-comments', this.post.comments);
      console.log('params id ',this.post.comments);
    });
   }
   getReply(comment: PostCommentItem) {
    var reply = [];
    for (var key in Object.keys(comment.reply)) {
      var item = comment.reply[key];
      console.log('getReply item',item);
      reply.push({ $key: key, ...item });
    }
    console.log('getReply replies',reply);
    return reply;
  }

  ngOnInit() {
  }

}
