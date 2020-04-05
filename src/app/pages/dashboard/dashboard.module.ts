import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavBarComponent } from './components';
import { DashboardComponent } from './dashboard.component';
import { routes } from './dashboard.routes';
import { DashboardService } from './services';

import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    DashboardComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LayoutModule,
    SharedModule
  ],
  providers: [
    DashboardService
  ]
})
export class DashboardModule { }
