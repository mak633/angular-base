import { UserDialogComponent } from './user-dialog.component';

import { MatDialogRefMock } from '@root/src/jest-mocks';

describe('UserDialogComponent', () => {
  let component: UserDialogComponent;
  let matDialogRefMock: MatDialogRefMock;
  const mockUsers = [
    {
      id: 1,
      username: 'test'
    }
  ] as any;

  beforeEach(() => {
    matDialogRefMock = new MatDialogRefMock();
    component = new UserDialogComponent(
      matDialogRefMock as any,
      mockUsers[0]
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
