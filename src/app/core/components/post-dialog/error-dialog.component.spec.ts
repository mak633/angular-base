import { ErrorDialogComponent } from './error-dialog.component';

import { MatDialogRefMock } from '@root/src/jest-mocks';

describe('ErrorDialogComponent', () => {
  let component: ErrorDialogComponent;
  let matDialogRefMock: MatDialogRefMock;

  const mockError = {
    message: 'test',
    statusText: 'test'
  } as any;

  beforeEach(() => {
    matDialogRefMock = new MatDialogRefMock();
    component = new ErrorDialogComponent(
      matDialogRefMock as any,
      mockError
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`onClose: should close modal window`, () => {
    component.onClose();
    expect(matDialogRefMock.close).toHaveBeenCalled();
  });
});
