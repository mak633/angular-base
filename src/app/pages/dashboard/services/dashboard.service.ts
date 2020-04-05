import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Post, User } from '../models';

import { environment } from '@environment';

@Injectable()
export class DashboardService {
  constructor(private http: HttpClient) {}

  public getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(
      `${environment.apiUrl}/posts`
    );
  }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(
      `${environment.apiUrl}/users`
    );
  }

  public getPostsWithUsers(): Observable<Post[]> {
    return forkJoin(this.getPosts(), this.getUsers()).pipe(
      map(([posts, users]) => posts.map(p => ({...p, username: users.find(u => u.id === p.userId).username})))
    )
  }
}
