import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavBarComponent implements OnInit, OnDestroy {
  public isExpanded: boolean;
  public isHandset: boolean;

  private readonly destroy$: Subject<void> = new Subject();

  constructor(private breakpointObserver: BreakpointObserver) {}

  public ngOnInit(): void {
    this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      takeUntil(this.destroy$)
    ).subscribe(i => this.isHandset = i);
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

