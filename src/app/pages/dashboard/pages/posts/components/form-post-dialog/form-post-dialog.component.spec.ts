import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPostDialogComponent } from './form-post-dialog.component';

describe('FormPostDialogComponent', () => {
  let component: FormPostDialogComponent;
  let fixture: ComponentFixture<FormPostDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPostDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPostDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
