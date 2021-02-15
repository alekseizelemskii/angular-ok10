import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http'
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { FullUserComponent } from './components/full-user/full-user.component';
import { RouterModule } from '@angular/router';
import { UserResolveService } from './services/user-resolve.service'
import { GetUserService } from './services/get-user.service';
import {UserStyleDirective} from '../user/directives/styles.directive';
import {FilterPipe} from './pipes/filter.pipe'
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild([{
      path: '', component: UsersComponent, resolve: {usersData: UserResolveService}, children:[{
        path: ':id', component: FullUserComponent
      }]
    }])
    
  ],
  declarations: [
    UserComponent,
    UsersComponent,
    FullUserComponent,
    UserStyleDirective,
    FilterPipe
  
  ],
  exports:[HttpClientModule],

  providers:[UserResolveService,GetUserService]
})
export class UserModule { }
