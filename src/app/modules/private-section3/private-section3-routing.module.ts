import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrivateSection3Component } from './private-section3.component';

const routes: Routes = [{ path: '', component: PrivateSection3Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateSection3RoutingModule { }
