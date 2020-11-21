import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { iTopNavbar } from '@shared/ui-components/header/components/top-navbar/top-navbar.model';

@Injectable({
  providedIn: 'root'
})
export class TopNavbarService {

  obsTopNavbarData$ = new BehaviorSubject(null);

  constructor() { }

  /**
   * Send data to Top Navbar
   * @param obj Data to pass to Top Navbar
   */
  sendDataToTopNavbar(obj: iTopNavbar) {
    this.obsTopNavbarData$.next(obj);
  }
  
}
