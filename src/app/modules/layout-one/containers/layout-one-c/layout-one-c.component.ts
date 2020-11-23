import { Component, OnInit } from '@angular/core';
import { iEvent } from '@shared/models';
import { AuthService } from '@shared/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-one-c',
  templateUrl: './layout-one-c.component.html',
  styleUrls: ['./layout-one-c.component.scss']
})
export class LayoutOneCComponent {

  constructor(private objAuthService: AuthService,
              private objRoute: Router) { }

  /**
   * Function to handle all child events
   * @param objEvent 
   */
  handleChildEvents(objEvent: iEvent) {
    switch (objEvent.operation) {
      case 'LOGOUT':
        this.objAuthService.removeAuthDetails();
        this.objRoute.navigate(['/login']);        
        break;
    }
  }
}
