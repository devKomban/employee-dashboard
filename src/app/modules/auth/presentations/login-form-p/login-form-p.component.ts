import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { iEvent } from '@shared/models';


@Component({
  selector: 'app-login-form-p',
  templateUrl: './login-form-p.component.html',
  styleUrls: ['./login-form-p.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormPComponent implements OnInit {

  @Input() strError: string;
  @Output() pEvent = new EventEmitter<iEvent>();

  loginForm = this.objFB.group({
    strUserName: ['', Validators.required],
    strPassword: ['', Validators.required]
  });

  constructor(private objFB: FormBuilder) { }

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
