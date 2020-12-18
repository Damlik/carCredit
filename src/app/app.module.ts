import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarListComponent } from './car-list/car-list.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreditDialogComponent } from './credit-dialog/credit-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    CreditDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  entryComponents: [CreditDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
