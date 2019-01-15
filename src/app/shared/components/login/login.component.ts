import { Component, OnInit } from '@angular/core';

import { providers } from 'src/models/AngularFireAuthProviders';
import * as firebase from  'firebase';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:{};
  form:{user:string;password:string}={user:'',password:''};
  constructor(private authService:AuthService) {
    authService.appUser$.subscribe(user=>this.user=user);
   }

  ngOnInit() {
  }
  login(){

  }
  loginWithFacebook(){
    this.authService.login(providers.FACEBOOK_PROVIDER);
  }
  loginWithGoogle(){
    this.authService.login(providers.GOOGLE_PROVIDER);
  }

}
