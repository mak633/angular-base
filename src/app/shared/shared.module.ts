import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { DevkitModule } from './devkit/devkit.module';

@NgModule({
  imports: [
    CommonModule,
    DevkitModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    DevkitModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {}
