import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostModel } from '../models/post-model'


@Injectable({
    providedIn: 'root'
})
export class PostService {

constructor(private httpPost: HttpClient ) { }

    getPostsById(id): Observable <PostModel[]> {
        return this
        .httpPost.get<PostModel[]>('https://jsonplaceholder.typicode.com/users/' + id + '/posts')
    }

}
