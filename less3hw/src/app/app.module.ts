import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import {UserComponent} from './components/user/user.component';
import {UsersComponent} from './components/users/users.component';
import {FullUserComponent} from './components/full-user/full-user.component'

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    FullUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([{
      path: 'users', component: UsersComponent, children: [{
        path: ':id', component:FullUserComponent
      }]
    }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
