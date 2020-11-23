import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';



@NgModule({
  declarations: [TopNavbarComponent],
  imports: [
    CommonModule,

    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  exports: [TopNavbarComponent]
})
export class HeaderModule { }
