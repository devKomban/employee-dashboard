import { Component, OnInit } from '@angular/core';
import { TopNavbarService } from '@shared/ui-components/header/components/top-navbar/top-navbar.service';
import { Observable } from 'rxjs';
import { iTopNavbar } from '@shared/ui-components/header/components/top-navbar/top-navbar.model';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss']
})
export class TopNavbarComponent implements OnInit {

  obsTopNavbarData$: Observable<iTopNavbar>;

  constructor(private objTopNavbarService: TopNavbarService) { }

  ngOnInit(): void {
    this.obsTopNavbarData$ = this.objTopNavbarService.obsTopNavbarData$.asObservable();
  }

}
