import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DevkitModule } from './devkit/devkit.module';

@NgModule({
  imports: [
    CommonModule,
    DevkitModule
  ],
  exports: [
    CommonModule,
    DevkitModule
  ]
})
export class SharedModule {}
