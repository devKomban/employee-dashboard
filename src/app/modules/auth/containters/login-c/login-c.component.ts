import { Component, OnInit } from '@angular/core';
import { iEvent } from '@shared/models';
import { AuthService } from '@shared/services';
import { take } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-c',
  templateUrl: './login-c.component.html',
  styleUrls: ['./login-c.component.scss']
})
export class LoginCComponent implements OnInit {

  strError: string;
  constructor(private objAuthService: AuthService,
              private objRoute: Router) { }

  ngOnInit(): void {
  }

  handleChildEvents(objEvent: iEvent) {
    switch (objEvent.operation) {
      case 'LOGIN':
        this.objAuthService.authenticateUser(objEvent.data)
        .pipe(take(1))
        .subscribe(objAuthDetails => {
          this.objAuthService.setAuthDetails(objAuthDetails);
          this.objRoute.navigate(['/dashboard']);
        },
      ({error}) => {
        this.strError = error.message
      });
        break;
    
      default:
        break;
    }
  }
}
