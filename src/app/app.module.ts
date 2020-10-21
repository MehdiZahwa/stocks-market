import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NoPageFoundComponent } from './shared/no-page-found/no-page-found.component';
import { HomeModule } from './modules/home/home.module';
import { MenuComponent } from './shared/menu/menu.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LoginComponent } from './login/login.component';
import { MatDialogModule } from '@angular/material/dialog';

var firebaseConfig = {
  apiKey: 'AIzaSyDFGobx04KeFwBvgvRKmz1XCciYqWG8-y8',
  authDomain: 'stocks-market-41d31.firebaseapp.com',
  databaseURL: 'https://stocks-market-41d31.firebaseio.com',
  projectId: 'stocks-market-41d31',
  storageBucket: 'stocks-market-41d31.appspot.com',
  messagingSenderId: '604924409247',
  appId: '1:604924409247:web:d207cdc8c44cbea43af9aa',
  measurementId: 'G-SL89V290X9',
};

@NgModule({
  declarations: [
    AppComponent,
    NoPageFoundComponent,
    MenuComponent,
    FooterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
