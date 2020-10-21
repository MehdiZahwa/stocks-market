import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrivateSection2Component } from './private-section2.component';

const routes: Routes = [{ path: '', component: PrivateSection2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateSection2RoutingModule { }
