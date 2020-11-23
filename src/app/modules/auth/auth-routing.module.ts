import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginCComponent } from './containters/login-c/login-c.component';
import { SkipLoginGuard } from '@shared/guards';

const routes: Routes = [
  {
    path:'login',
    component: LoginCComponent,
    canActivate: [SkipLoginGuard]
  },
  {
    path: '**',
    redirectTo: '/dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
