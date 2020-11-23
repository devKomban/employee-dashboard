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
  obsTopNavbarData$: Observable<iTopNavbar>;

  constructor(private objTopNavbarService: TopNavbarService) { }

  ngOnInit(): void {
    this.obsTopNavbarData$ = this.objTopNavbarService.obsTopNavbarData$.asObservable();
  }

  logout() {
    this.pEvent.emit({
      operation: 'LOGOUT'
    })
  }

}
