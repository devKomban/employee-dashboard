import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { iEvent } from '@shared/models';


@Component({
  selector: 'app-login-form-p',
  templateUrl: './login-form-p.component.html',
  styleUrls: ['./login-form-p.component.scss']
})
export class LoginFormPComponent implements OnInit {

  @Output() pEvent = new EventEmitter<iEvent>();
  loginForm = this.fb.group({
    strUserName: [''],
    strPassword: ['']
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  /**
   * Authenticate user credentials
   */
  authenticate() {
    if (!this.loginForm.valid)
      return;

    this.pEvent.emit(
      {
        operation: 'LOGIN',
        data: this.loginForm.value
      }
    )
  }
}
