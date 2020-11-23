import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { TopNavbarService } from '@shared/ui-components/header/components/top-navbar/top-navbar.service';
import { Observable } from 'rxjs';
import { iTopNavbar } from '@shared/ui-components/header/components/top-navbar/top-navbar.model';
import { iEvent } from '@shared/models';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopNavbarComponent implements OnInit {

  @Output() pEvent = new EventEmitter<iEvent>();
  /**
   * get the data passed to the top nav bar by other components
   */
  obsTopNavbarData$: Observable<iTopNavbar>;

  constructor(private objTopNavbarService: TopNavbarService) { }

  ngOnInit(): void {
    /**
     * using subject only to listen and not to pass data
     */
    this.obsTopNavbarData$ = this.objTopNavbarService.obsTopNavbarData$.asObservable();
  }

  /**
   * Logout current user
   */
  logout() {
    this.pEvent.emit({
      operation: 'LOGOUT'
    })
  }

}
