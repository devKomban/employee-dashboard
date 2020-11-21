import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginCComponent } from './containters/login-c/login-c.component';
import { LoginFormPComponent } from './presentations/login-form-p/login-form-p.component';


@NgModule({
  declarations: [LoginCComponent, LoginFormPComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    
    AuthRoutingModule
  ]
})
export class AuthModule { }
