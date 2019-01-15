import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { AppUser } from 'src/models/app-user';
import { switchMap } from 'rxjs/operators';
import { UserService } from '../user/user.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$:Observable<firebase.User>;
  constructor(
    private afAuth:AngularFireAuth,
    private userService:UserService) 
    {
    this.user$=afAuth.authState;
  }
  login(provider:firebase.auth.AuthProvider){
    this.user$.subscribe(user=>{
      this.userService.save(user);
    });
    this.afAuth.auth.signInWithPopup(provider);
  }

  get appUser$():Observable<AppUser>{
    return this.user$
    .pipe(switchMap((user=>{
      if(user) return this.userService.get(user.uid);
      return new Observable(null);
    })));
  }
}
