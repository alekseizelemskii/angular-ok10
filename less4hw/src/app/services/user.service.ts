import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface UserModel{
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        city: string;
        suite: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        }    
    }
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    }

}

@Injectable({
    providedIn: 'root'
})
export class UserService {

url = 'https://jsonplaceholder.typicode.com/users'

constructor(private http: HttpClient) { }

getUsers(): Observable<UserModel[]>{
    return this.http.get<UserModel[]>(this.url)
}

}
