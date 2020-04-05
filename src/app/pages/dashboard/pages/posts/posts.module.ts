import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PostsComponent } from '../posts/posts.component';
import { routes } from './posts.routes';

import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [PostsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class PostsModule { }
