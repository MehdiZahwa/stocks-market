import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { HomeComponent } from './modules/home/home.component';
import { NoPageFoundComponent } from './shared/no-page-found/no-page-found.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./modules/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'section-one',
        loadChildren: () =>
          import('./modules/private-section1/private-section1.module').then(
            (m) => m.PrivateSection1Module
          ),
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
