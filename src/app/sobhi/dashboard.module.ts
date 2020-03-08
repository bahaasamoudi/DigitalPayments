import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SobhiRoutingModule } from './dashboard-routing.module';
import { TestComponent } from '../test/test.component';


@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    CommonModule,
    SobhiRoutingModule
  ]
})
export class DashboardModule { }
