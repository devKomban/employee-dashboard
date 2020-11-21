import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginCComponent } from './containters/login-c/login-c.component';

const routes: Routes = [
  {
    path:'login',
    component: LoginCComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
