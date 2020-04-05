import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-form-post-dialog',
  templateUrl: './form-post-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormPostDialogComponent {
  public form: FormGroup = new FormGroup({
    title: new FormControl(null, Validators.required),
    body: new FormControl(null, Validators.required),
    username: new FormControl(null, Validators.required),
  });

  constructor(
    private dialogRef: MatDialogRef<FormPostDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}


  public onClose(): void {
    this.dialogRef.close();
  }

  public onSubmit(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      return;
    }
    const value = this.form.value;
    this.form.reset();
    this.dialogRef.close(value);
  }
}
