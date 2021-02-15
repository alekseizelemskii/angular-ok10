import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostModel } from '../../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: PostModel
  
  

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { 
    
  }

  ngOnInit() {
  }

  getBody():void{
    this.router.navigate([this.post.id], {relativeTo: this.activatedRoute, state: this.post})

  }

}
