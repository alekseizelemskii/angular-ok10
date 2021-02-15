import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface UserModel {
    id:number;
    name:string;
    username:string;
    email:string;
    address: {city:string}
}

@Injectable({providedIn: 'root'})
export class UserService {

constructor(private http: HttpClient) { }

getUsers():Observable<UserModel[]>{
   return this.http.get<UserModel[]>('https://jsonplaceholder.typicode.com/users')
}

}
