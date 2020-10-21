import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NoPageFoundComponent } from './shared/no-page-found/no-page-found.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'section-one',
        loadChildren: () =>
          import('./modules/private-section1/private-section1.module').then(
            (m) => m.PrivateSection1Module
          ),
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./modules/home/home.module').then((m) => m.HomeModule),
      },
    ],
  },

  {
    path: '**',
    component: NoPageFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
