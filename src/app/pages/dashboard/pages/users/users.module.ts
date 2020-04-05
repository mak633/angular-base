import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UsersComponent } from '../users/users.component';
import { routes } from './users.routes';

import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class UsersModule { }
