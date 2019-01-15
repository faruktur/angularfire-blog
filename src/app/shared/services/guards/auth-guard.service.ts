import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { CanActivate, Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(private authService:AuthService,private router:Router) {

   }
   canActivate(){
     return this.authService.appUser$.pipe(map(user=>{
       if(user ) return true;
       this.router.navigateByUrl('/login');
       return false;
     }));
   }
}
