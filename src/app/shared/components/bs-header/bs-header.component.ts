import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';
import { AppUser } from 'src/models/app-user';

@Component({
  selector: 'app-bs-header',
  templateUrl: './bs-header.component.html',
  styleUrls: ['./bs-header.component.css']
})
export class BsHeaderComponent implements OnInit {
  appUser:AppUser;
  constructor(private authService:AuthService) {
    this.authService.appUser$.subscribe(user=>{
      this.appUser=user;
    });
   }

  ngOnInit() {
  }

}
