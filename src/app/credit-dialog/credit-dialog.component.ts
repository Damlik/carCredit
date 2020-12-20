import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { SuccessCreditDialogComponent } from '../success-credit-dialog/success-credit-dialog.component';
import { Car } from '../models/car';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-credit-dialog',
  templateUrl: './credit-dialog.component.html',
  styleUrls: ['./credit-dialog.component.css']
})
export class CreditDialogComponent implements OnInit {
  public minInitialFee = 0;
  public maxInitialFee = 0;
  public stepInitialFee = 0;
  public valueInitialFee: FormControl;
  public percentValueInitialFee = 10;
  public payPerMonth: FormControl;
  public creditTerm: FormControl;
  public maxValueTermCredit = 600;
  public maxvaluePayPerMonth = 50000;
  public year = 50;
  public amountOfPayment = 600000;
  public monthPayment = 9800;
  public percentRate = 18.3;

  constructor(@Inject(MAT_DIALOG_DATA) public car: Car,
              private dialog: MatDialog,
              public dialogRef: MatDialogRef<CreditDialogComponent>,
  ) {
    this.valueInitialFee = new FormControl(Math.round(this.car.price * 0.1));
    this.payPerMonth = new FormControl(1000);
    this.creditTerm = new FormControl(600);
    this.initializeFormSubscriptions();
  }


  initInitialFee(): void {
    const min = 10;
    const max = 90;
    const step = 5;
    this.minInitialFee = this.car.price * min / 100;
    this.maxInitialFee = this.car.price * max / 100;
    this.stepInitialFee =  this.car.price * step / 100;
  }

  initializeFormSubscriptions(): void {
    this.valueInitialFee.valueChanges.subscribe((value: number) => {
      this.percentValueInitialFee = Math.round((value / this.car.price) * 100);
      this.creditProgramm();
    });

    this.payPerMonth.valueChanges.subscribe((value: number) => {
      this.creditTerm.setValue( this.maxValueTermCredit - (value / 1000) * 12 + 12, {emitEvent: false});
      this.year = this.creditTerm.value / 12;
      this.creditProgramm();
    });

    this.creditTerm.valueChanges.subscribe((value: number) => {
      this.year = value / 12;
      this.payPerMonth.setValue(this.maxvaluePayPerMonth - this.year * 1000 + 1000, {emitEvent: false});
      this.creditProgramm();
    });
  }

  creditProgramm(): void {
    this.calculationAmountOfPayment();
    if (this.valueInitialFee.value > 200000 && this.payPerMonth.value < 10000 && this.creditTerm.value > 400) {
      this.percentRate = 18.3;
      this.monthPayment = 9800;
    } else if (this.valueInitialFee.value > 400000 && this.payPerMonth.value < 20000 && this.creditTerm.value > 300) {
      this.percentRate = 16.2;
      this.monthPayment = 18200;
    } else if (this.valueInitialFee.value > 600000 && this.payPerMonth.value < 30000 && this.creditTerm.value > 200) {
      this.percentRate = 14.6;
      this.monthPayment = 25500;
    } else if (this.valueInitialFee.value > 800000 && this.payPerMonth.value < 40000 && this.creditTerm.value > 100) {
      this.percentRate = 12.3;
      this.monthPayment = 37100;
    } else if (this.valueInitialFee.value > 1000000 && this.payPerMonth.value <= 50000 && this.creditTerm.value > 50) {
      this.percentRate = 10.8;
      this.monthPayment = 44900;
    }
  }

  calculationAmountOfPayment(): void {
    this.amountOfPayment = this.payPerMonth.value * this.creditTerm.value;
  }

  openDialog(): void {
    this.dialog.open(SuccessCreditDialogComponent,
      {data:
          {
            amountOfPayment: this.amountOfPayment,
            monthPayment: this.monthPayment,
            percentRate: this.percentRate
          }
      });
    this.closeCreditDialog();
  }

  closeCreditDialog(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.initInitialFee();
  }

}
