import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ErrorDialogComponent } from '../components';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor(private dialog: MatDialog) { }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((err: any) => {
        if(err instanceof HttpErrorResponse) {
          if(err.status !== 401) {
            this.dialog.open(ErrorDialogComponent, {
              data: err
            });
          }
        }
        return next.handle(req);
      }));
  }
}
