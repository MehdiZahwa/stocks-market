import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateSection1RoutingModule } from './private-section1-routing.module';
import { PrivateSection1Component } from './private-section1.component';


@NgModule({
  declarations: [PrivateSection1Component],
  imports: [
    CommonModule,
    PrivateSection1RoutingModule
  ]
})
export class PrivateSection1Module { }
