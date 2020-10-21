import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NoPageFoundComponent } from './shared/no-page-found/no-page-found.component';
import { HomeModule } from './modules/home/home.module';
import { MenuComponent } from './shared/menu/menu.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NoPageFoundComponent,
    MenuComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HomeModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
