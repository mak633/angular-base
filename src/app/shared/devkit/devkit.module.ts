import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CDK_MODULES, DEVKIT_DECLARATIONS, MATERIAL_MODULES } from './devkit.di';

@NgModule({
  imports: [
    CommonModule,
    MATERIAL_MODULES,
    CDK_MODULES
  ],
  declarations: [DEVKIT_DECLARATIONS],
  exports: [MATERIAL_MODULES, DEVKIT_DECLARATIONS]
})
export class DevkitModule {}
