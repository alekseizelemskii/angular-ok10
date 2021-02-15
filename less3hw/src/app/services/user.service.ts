import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

export interface UserModel{
    id: number,
    name: string
}

@Injectable({
    providedIn: 'root'
})
export class UserService {

constructor(private http: HttpClient) { }

getUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>('https://jsonplaceholder.typicode.com/users')
}

getUser(id: number):Observable<UserModel>{
    return this.http.get<UserModel>('https://jsonplaceholder.typicode.com/users/' + id)
    
}

}
