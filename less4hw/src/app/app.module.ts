import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { FullUserComponent } from './full-user/full-user.component';
import { ResolveUserService } from './services/resolve-user.service';
import { ResolvePostService } from './services/resolve-post.service';
import { FullPostComponent } from './full-post/full-post.component';



const routes: Routes = [
  {path: 'users', component: UsersComponent, resolve: {usersData: ResolveUserService},children: [{
    path: ':id', component: FullUserComponent}
  ]},
  {path: 'posts', component: PostsComponent, resolve: {postsData: ResolvePostService}, children:[{
    path: ':id', component: FullPostComponent}
  ]}
]

@NgModule({
  declarations: [					
    AppComponent,
      UsersComponent,
      UserComponent,
      PostsComponent,
      PostComponent,
      FullUserComponent,
      FullPostComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
