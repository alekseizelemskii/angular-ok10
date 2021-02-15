import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { UserModel, UserService } from './user.service';

@Injectable()
export class ResolveUserService implements Resolve<UserModel[]> {

constructor(private userService: UserService) { }

resolve(): Observable<UserModel[]> | Promise<UserModel[]> | UserModel[] {
    return this.userService.getUsers()
}

}
