import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface UserModel {
    id:number,
    name:string,
    username:string,
    email:string,
    address:{
        city:string,
        street:string
    }
}

@Injectable({
    providedIn: 'root'
})
export class GetUserService {

constructor(private http: HttpClient) { }

getUsers():Observable<UserModel[]>{
    return this.http.get<UserModel[]>('https://jsonplaceholder.typicode.com/users')
    }

}
