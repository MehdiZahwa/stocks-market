import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateSection2RoutingModule } from './private-section2-routing.module';
import { PrivateSection2Component } from './private-section2.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [PrivateSection2Component],
  imports: [CommonModule, PrivateSection2RoutingModule, MatCardModule],
})
export class PrivateSection2Module {}
