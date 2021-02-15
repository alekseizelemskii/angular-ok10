import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostModel } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: PostModel[]

  constructor(private activatedRoute: ActivatedRoute){
    this.activatedRoute.data.subscribe(value => this.posts = value.postsData)
    
  }

  ngOnInit() {
    
  }


}
