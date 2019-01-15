import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AngularFontAwesomeModule } from 'angular-font-awesome'; 

import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostModule } from './post/post.module';
import { CategoryModule } from './category/category.module';
import { SocialIconsComponent } from './social-icons/social-icons.component';
import { SocialShareLinksComponent } from './social-share-links/social-share-links.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material-modules';
@NgModule({
  declarations: [
    AppComponent,
    SocialIconsComponent,
    SocialShareLinksComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    PostModule,
    CategoryModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    RouterModule.forRoot([
       
    ]),
    NgbModule,
    AngularFontAwesomeModule ,
    //FİREBASE
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ///
    
    
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
