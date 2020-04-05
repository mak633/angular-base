import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Post } from '../../../../models';

@Component({
  selector: 'app-post-dialog',
  templateUrl: './post-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostDialogComponent {
  constructor(
    private dialogRef: MatDialogRef<PostDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Post) {}


  public onClose(): void {
    this.dialogRef.close();
  }
}
