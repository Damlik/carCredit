import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarListComponent } from './car-list/car-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreditDialogComponent } from './credit-dialog/credit-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SuccessCreditDialogComponent } from './success-credit-dialog/success-credit-dialog.component';
import { CustomCurrencyPipe } from './pipes/custom-currency.pipe';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    CreditDialogComponent,
    SuccessCreditDialogComponent,
    CustomCurrencyPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule
  ],
  entryComponents: [CreditDialogComponent, SuccessCreditDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
