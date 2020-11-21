import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardCComponent } from './containers/dashboard-c/dashboard-c.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardCComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
