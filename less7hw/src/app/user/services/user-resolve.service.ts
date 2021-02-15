import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { GetUserService, UserModel } from './get-user.service';

@Injectable({
    providedIn: 'root'
})
export class UserResolveService implements Resolve<UserModel[]> {

constructor(private getUserService: GetUserService) { }

resolve(): Observable<UserModel[]> | Promise<UserModel[]> | UserModel[]{
    return this.getUserService.getUsers()
}

}
