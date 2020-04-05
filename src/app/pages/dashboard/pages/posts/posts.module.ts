import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PostsComponent } from '../posts/posts.component';
import { FormPostDialogComponent, PostDialogComponent } from './components';
import { routes } from './posts.routes';

import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    PostsComponent,
    PostDialogComponent,
    FormPostDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class PostsModule { }
