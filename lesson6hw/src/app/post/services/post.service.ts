import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface PostModel {
    userId: number;
    id: number;
    title: string;
    body: string;
}

@Injectable({providedIn: 'root'})
export class PostService {

constructor(private http: HttpClient) { }

getPosts() : Observable<PostModel[]> {
    return this.http.get<PostModel[]>('https://jsonplaceholder.typicode.com/posts')
    }   
}
