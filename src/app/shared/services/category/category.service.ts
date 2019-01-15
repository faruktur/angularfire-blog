import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import {Category} from '../../../../models/category';
import { switchMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
 @Injectable({
  providedIn: 'root'
})
export class CategoryService {
    

  constructor(private db:AngularFireDatabase) {}

  getAll(){
    return this.db.list('/categories').snapshotChanges().pipe(map(c=>{
      return c.map(k=>{
        return {$key:k.key,...k.payload.val()} as Category; 
      });
    }));
  }
  create(category){
    return this.db.list('/categories').push(category);
  }
  update(key,category: Category): any {
    console.log('category Service cate',category);
    return this.db.object('/categories/'+key).update(category);
  }
  delete(key){
    return this.db.object('/categories/'+key).remove();
  }
}
