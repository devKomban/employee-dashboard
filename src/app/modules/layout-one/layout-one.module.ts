import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { LayoutOneRoutingModule } from './layout-one-routing.module';
import { LayoutOneCComponent } from './containers/layout-one-c/layout-one-c.component';
import { HeaderModule } from '@shared/ui-components';


@NgModule({
  declarations: [LayoutOneCComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    LayoutOneRoutingModule,

    HeaderModule
  ]
})
export class LayoutOneModule { }
