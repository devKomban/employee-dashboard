import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardCComponent } from './containers/dashboard-c/dashboard-c.component';
import { UserListPComponent } from '@modules/dashboard/presentations/user-list-p/user-list-p.component';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [DashboardCComponent, UserListPComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,

    DashboardRoutingModule
  ]
})
export class DashboardModule { }
