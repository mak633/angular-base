import { PostDialogComponent } from './components';
import { PostsComponent } from './posts.component';

import { MatDialogRefMock, mockDashboardService } from '@root/src/jest-mocks';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let matDialogRefMock: MatDialogRefMock;
  const mockPosts = [
    {
      id: 1,
      title: 'test'
    }
  ] as any;

  const changeDetectorStub = {
    markForCheck: jest.fn()
  };

  beforeEach(() => {
    matDialogRefMock = new MatDialogRefMock();
    component = new PostsComponent(
      mockDashboardService,
      matDialogRefMock as any,
      changeDetectorStub as any
    );
  });

  it('ngDestroy: should finish subscriptions', () => {
    component['destroy$'].next = jest.fn();
    component['destroy$'].complete = jest.fn();
    component.ngOnDestroy();
    expect(component['destroy$'].next).toBeCalled();
    expect(component['destroy$'].complete).toBeCalled();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`onOpenMoreDetails: should open modal window`, () => {
    component.onOpenMoreDetails(mockPosts[0]);
    expect(matDialogRefMock.open).toBeCalledWith(PostDialogComponent, { width: '350px', data: mockPosts[0]});
  });
});
