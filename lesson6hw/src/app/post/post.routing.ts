import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FullPostComponent} from './components/full-post/full-post.component'
import {ResolvePostService} from './services/resolve-post.service'
import { PostsComponent } from './components/posts/posts.component';

const routes: Routes = [
  { path: '', component: PostsComponent, resolve: {postsData: ResolvePostService}, children: [{
    path: ':id', component:FullPostComponent
  }] },
];



@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})

export class PostRoutingModule{

}
