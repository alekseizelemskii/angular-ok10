import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent} from './components/users/users.component'
import {FullUserComponent} from './components/full-user/full-user.component'
import {ResolveUserService} from './services/resolve-user.service'

const routes: Routes = [
  { path: '', component: UsersComponent, resolve: {usersData: ResolveUserService}, children: [{
    path: ':id', component:FullUserComponent
  }] },
];



@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})

export class UserRoutingModule{

}
