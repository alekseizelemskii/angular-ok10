
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      path: 'users', loadChildren: () => import('./user/user.module').then(module => module.UserModule)
    }, {
      path: 'posts', loadChildren: () => import('./post/post.module').then(module => module.PostModule)
    }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
