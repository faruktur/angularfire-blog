import { Injectable } from '@angular/core';
import { Post } from 'src/models/post';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { formatDate } from '@angular/common';
import { query } from '@angular/core/src/render3/query';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private db: AngularFireDatabase) { }

  delete(id: string): any {
    return this.db.object('/posts/' + id).remove();
  }
  getById(id: string) {
    return this.db.object('/posts/' + id).snapshotChanges().pipe(map(p => {
      return { $key: id, ...p.payload.val() } as Post;
    }));
  }
  update($key: string, post: any): any {
    let now = new Date();
    post.updatedDate = formatDate(now, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+3');
    return this.db.object('/posts/' + $key).update(post);
  }
  create(post: any): any {
    let now = new Date();
    post.updatedDate = formatDate(now, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+3');
    post.createdDate = formatDate(now, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+3');
    return this.db.list('/posts').push(post);
  }
  getAll() {
    return this.db.list('/posts').snapshotChanges().pipe(map(c => {
      return c.map(k => {
        console.log('getALL POST SERVİCE ', k);
        return { $key: k.key, ...k.payload.val() } as Post;
      });
    }));
  }
}
