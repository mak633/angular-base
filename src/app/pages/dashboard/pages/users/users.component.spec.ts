import { UserDialogComponent } from './components';
import { UsersComponent } from './users.component';

import { MatDialogRefMock, mockActivatedRoute, mockDashboardService, mockRouter } from '@root/src/jest-mocks';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let matDialogRefMock: MatDialogRefMock;
  const mockUsers = [
    {
      id: 1,
      username: 'test'
    }
  ] as any;

  beforeEach(() => {
    matDialogRefMock = new MatDialogRefMock();
    component = new UsersComponent(
      mockDashboardService as any,
      matDialogRefMock as any,
      mockActivatedRoute as any,
      mockRouter as any
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`onClose: should close modal window`, () => {
    component.onOpenMoreDetails(mockUsers[0]);
    expect(matDialogRefMock.open).toHaveBeenCalledWith(UserDialogComponent, {data: mockUsers[0]});
  });
});
