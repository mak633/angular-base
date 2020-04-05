
import { PostDialogComponent } from './post-dialog.component';

import { MatDialogRefMock } from '@root/src/jest-mocks';

describe('PostDialogComponent', () => {
  let component: PostDialogComponent;
  let matDialogRefMock: MatDialogRefMock;
  const mockPost = [
    {
      id: 1,
      title: 'test'
    }
  ] as any;

  beforeEach(() => {
    matDialogRefMock = new MatDialogRefMock();
    component = new PostDialogComponent(
      matDialogRefMock as any,
      mockPost[0]
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
