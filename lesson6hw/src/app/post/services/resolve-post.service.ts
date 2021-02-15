import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { PostModel, PostService } from './post.service';

@Injectable({providedIn: 'root'})
export class ResolvePostService implements Resolve<PostModel[]> {

constructor(private postService: PostService) {}

resolve():Observable<PostModel[]> | Promise<PostModel[]> | PostModel[] {
    return this.postService.getPosts();
}

}
