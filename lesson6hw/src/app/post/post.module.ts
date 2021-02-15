import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http'
import { FullPostComponent } from './components/full-post/full-post.component';
import { PostComponent } from './components/post/post.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostService } from './services/post.service';
import { ResolvePostService } from './services/resolve-post.service';
import { PostRoutingModule } from './post.routing';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule, 
    PostRoutingModule
    
  ],
  exports: [HttpClientModule],
  
  declarations: [PostComponent, PostsComponent, FullPostComponent],

  providers: [ PostService, ResolvePostService]
})
export class PostModule { }
