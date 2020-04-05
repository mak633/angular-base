import { FormPostDialogComponent } from './form-post-dialog.component';

import { MatDialogRefMock } from '@root/src/jest-mocks';

describe('FormPostDialogComponent', () => {
  let component: FormPostDialogComponent;
  let matDialogRefMock: MatDialogRefMock;

  beforeEach(() => {
    matDialogRefMock = new MatDialogRefMock();
    component = new FormPostDialogComponent(
      matDialogRefMock as any,
      {}
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`onClose: should close modal window`, () => {
    component.onClose();
    expect(matDialogRefMock.close).toHaveBeenCalled();
  });

  describe('onSubmit', () => {
    it(`should be 'submitted'`, () => {
      const mockFormData = {
        title: 'test',
        body: 'test',
        username: 'test'
      };
      component.form.setValue(mockFormData);
      component.form.markAllAsTouched = jest.fn();
      component.form.reset = jest.fn();
      component.onSubmit();
      expect(matDialogRefMock.close).toHaveBeenCalledWith(mockFormData);
      expect(component.form.markAllAsTouched).toHaveBeenCalled();
      expect(component.form.reset).toHaveBeenCalled();
    });

    it(`shouldn't be 'submitted'`, () => {
      component.onSubmit();
      expect(component.onSubmit()).toBeFalsy();
    });
  });
});
