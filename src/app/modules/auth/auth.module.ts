import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginCComponent } from './containters/login-c/login-c.component';
import { LoginFormPComponent } from './presentations/login-form-p/login-form-p.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [LoginCComponent, LoginFormPComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    
    AuthRoutingModule
  ]
})
export class AuthModule { }
