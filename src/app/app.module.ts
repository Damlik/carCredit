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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { YearPipe } from './pipes/year.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    CreditDialogComponent,
    SuccessCreditDialogComponent,
    CustomCurrencyPipe,
    YearPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [CreditDialogComponent, SuccessCreditDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
