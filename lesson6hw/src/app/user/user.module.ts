import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http'
import { UserRoutingModule } from './user.routing';
import { UsersComponent } from './components/users/users.component';
import { FullUserComponent } from './components/full-user/full-user.component';
import {UserComponent} from './components/user/user.component'
import { UserService } from './services/user.service';
import { ResolveUserService } from './services/resolve-user.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule, 
    UserRoutingModule
  ],
  exports: [HttpClientModule],
  
  declarations: [UsersComponent, FullUserComponent, UserComponent],

  providers: [UserService, ResolveUserService]
})
export class UserModule { }
