import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateSection3RoutingModule } from './private-section3-routing.module';
import { PrivateSection3Component } from './private-section3.component';


@NgModule({
  declarations: [PrivateSection3Component],
  imports: [
    CommonModule,
    PrivateSection3RoutingModule
  ]
})
export class PrivateSection3Module { }
