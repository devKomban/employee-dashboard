import { Component, OnInit } from '@angular/core';
import { iEvent } from '@shared/models';

@Component({
  selector: 'app-login-c',
  templateUrl: './login-c.component.html',
  styleUrls: ['./login-c.component.scss']
})
export class LoginCComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  handleChildEvents(objEvent: iEvent) {
    switch (objEvent.operation) {
      case 'LOGIN':
        
        break;
    
      default:
        break;
    }
  }
}
