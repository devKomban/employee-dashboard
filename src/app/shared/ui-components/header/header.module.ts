import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';

import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';



@NgModule({
  declarations: [TopNavbarComponent],
  imports: [
    CommonModule,

    MatToolbarModule
  ],
  exports: [TopNavbarComponent]
})
export class HeaderModule { }
