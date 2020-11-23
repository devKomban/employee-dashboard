import { Component, OnInit } from '@angular/core';
import { iEvent } from '@shared/models';
import { AuthService, LoadingService } from '@shared/services';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-layout-one-c',
  templateUrl: './layout-one-c.component.html',
  styleUrls: ['./layout-one-c.component.scss']
})
export class LayoutOneCComponent {

  obsSpinnerValue$ = this.objLoadingService.getSpinnerStatus();
  
  constructor(private objAuthService: AuthService,
              private objLoadingService: LoadingService,
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
