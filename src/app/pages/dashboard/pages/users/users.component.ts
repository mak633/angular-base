import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

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

  constructor(private dashboardService: DashboardService, private dialog: MatDialog) { }

  public ngOnInit(): void {
    this.users$ = this.dashboardService.getUsers();
  }

  public onOpenMoreDetails(user: User): void {
    this.dialog.open(UserDialogComponent, {
      data: user
    });
  }
}
