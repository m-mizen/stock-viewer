import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderModule } from './app-header/app-header.module';
import { SecuritiesDashboardModule } from './securities-dashboard/securities-dashboard.module';
import { HomeComponent } from './home/home.component';



 @NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppHeaderModule,
    SecuritiesDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
