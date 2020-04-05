import { Subject } from 'rxjs';

export class MatDialogRefMock {
  public close: any = jest.fn();
  public open: any = jest.fn();
}

export const mockDashboardService = {
  getPosts: new Subject(),
  getUsers: new Subject(),
  getPostsWithUsers: new Subject(),
} as any;

export const mockHttp = {
  get: jest.fn(),
  post: jest.fn()
} as any;

export const mockRouter = {
  navigate: jest.fn()
} as any;

export const mockActivatedRoute = {
  snapshot: {
    params: {}
  }
} as any;

