import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../../models';
import { DashboardService } from '../../services';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent implements OnInit {
  public users$: Observable<User[]>;

  constructor(private dashboardService: DashboardService) { }

  public ngOnInit(): void {
    this.users$ = this.dashboardService.getUsers();
  }

  public onOpenMoreDetails(user: User): void {}
}
