import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { take, tap } from 'rxjs/operators';

import { TopNavbarService } from '@shared/ui-components/header/components/top-navbar/top-navbar.service';
import { DashboardService } from '@shared/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard-c',
  templateUrl: './dashboard-c.component.html',
  styleUrls: ['./dashboard-c.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardCComponent implements OnInit {

  /**
   * Employee list observable
   * fetch data from server
   */
  obsEmployeeList$: Observable<any[]>;

  constructor(private objTopNavbarService: TopNavbarService,
              private objDashboardService: DashboardService) { }

  ngOnInit(): void {
    this.obsEmployeeList$ = this.objDashboardService.getEmployeeList()
    .pipe(
      take(1),
      /**
       * data to show in top nav bar
       */
      tap((arrEmployeeList: any[]) => {
        this.objTopNavbarService.sendDataToTopNavbar({
          strTitle: 'Employees',
          intCount: arrEmployeeList.length || 0
        })
      })
    );
  }

}
