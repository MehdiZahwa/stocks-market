import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoPageFoundComponent } from './shared/no-page-found/no-page-found.component';
import { HomeModule } from './modules/home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    NoPageFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
