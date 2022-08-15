import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './UI/header/header.component';
import { AddDvdComponent } from './home/add-dvd/add-dvd.component';
import { ViewRentedComponent } from './home/view-rented/view-rented.component';
import { RentDvdPopupComponent } from './home/add-dvd/rent-dvd-popup/rent-dvd-popup.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddDvdComponent,
    ViewRentedComponent,
    RentDvdPopupComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
