import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Post } from '../../models';
import { DashboardService } from '../../services';
import { FormPostDialogComponent, PostDialogComponent } from './components';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsComponent implements OnInit, OnDestroy {
  public posts: Post[];
  private readonly destroy$: Subject<void> = new Subject();

  constructor(
    private dashboardService: DashboardService,
    private dialog: MatDialog,
    private ref: ChangeDetectorRef) { }

  public ngOnInit(): void {
    this.dashboardService.getPostsWithUsers().pipe(takeUntil(this.destroy$)).subscribe(p => {
      this.posts = p;
      this.ref.markForCheck();
    });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public onOpenMoreDetails(post: Post): void {
    this.dialog.open(PostDialogComponent, {
      width: '350px',
      data: post
    });
  }

  public onOpenCreateNewPost(): void {
    const dialogCreatePostRef = this.dialog.open(FormPostDialogComponent, {
      width: '350px'
    });
    dialogCreatePostRef.afterClosed().subscribe(result => {
      this.posts.push(result);
      this.ref.markForCheck();
    });
  }
}
