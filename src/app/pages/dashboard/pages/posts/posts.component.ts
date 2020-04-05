import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Post } from '../../models';
import { DashboardService } from '../../services';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsComponent implements OnInit {
  public posts$: Observable<Post[]>;

  constructor(private dashboardService: DashboardService, private ref: ChangeDetectorRef) { }

  public ngOnInit(): void {
    this.posts$ = this.dashboardService.getPostsWithUsers();
  }

  public onOpenMoreDetails(post: Post): void {}
}
