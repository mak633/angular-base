import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { User } from '../../models';
import { DashboardService } from '../../services';
import { UserDialogComponent } from './components';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent implements OnInit {
  public users$: Observable<User[]>;

  constructor(
    private dashboardService: DashboardService,
    private dialog: MatDialog,
    private aroute: ActivatedRoute,
    private router: Router
  ) { }

  public ngOnInit(): void {
    const userId = +this.aroute.snapshot.params.id;
    this.users$ = this.dashboardService.getUsers().pipe(
      tap(users => {
        if (userId) {
          const user = users.find(u => u.id === userId);
          if (user) {
            this.onOpenMoreDetails(user);
          } else {
            this.router.navigate(['./users']);
          }
        }
      })
    );
  }

  public onOpenMoreDetails(user: User): void {
    this.dialog.open(UserDialogComponent, {
      data: user
    });
  }
}
