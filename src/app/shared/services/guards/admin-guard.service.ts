import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { CanActivate } from '@angular/router';
import { map } from 'rxjs/operators';
import { UserService } from 'src/app/shared/services/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate{

  canActivate(){
    return this.authService.appUser$.pipe(map(user=>{
      if(!user.isAdmin){
        alert('nabacağadın admin mi olacağadın :)))');
      }
      return user.isAdmin;

    }));
  }
  constructor(private authService:AuthService,private userService:UserService) { }
}
