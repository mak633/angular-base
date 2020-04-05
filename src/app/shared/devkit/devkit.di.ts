import { PortalModule } from '@angular/cdk/portal';
import { Type } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';

export const MATERIAL_MODULES: Type<unknown>[] = [
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatSnackBarModule,
  MatDialogModule,
  MatCardModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatInputModule,
  PortalModule
];

export const CDK_MODULES: Type<unknown>[] = [
];

export const DEVKIT_DECLARATIONS: Type<unknown>[] = [
];
