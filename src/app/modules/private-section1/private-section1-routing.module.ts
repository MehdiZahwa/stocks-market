import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrivateSection1Component } from './private-section1.component';

const routes: Routes = [{ path: '', component: PrivateSection1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateSection1RoutingModule { }
