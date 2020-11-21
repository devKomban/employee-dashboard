import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutOneRoutingModule } from './layout-one-routing.module';
import { LayoutOneCComponent } from './containers/layout-one-c/layout-one-c.component';
import { HeaderModule } from '@shared/ui-components';


@NgModule({
  declarations: [LayoutOneCComponent],
  imports: [
    CommonModule,
    LayoutOneRoutingModule,

    HeaderModule
  ]
})
export class LayoutOneModule { }
