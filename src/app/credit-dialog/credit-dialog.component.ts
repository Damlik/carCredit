import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {MatDialog} from '@angular/material/dialog';
import {SuccessCreditDialogComponent} from '../success-credit-dialog/success-credit-dialog.component';


@Component({
  selector: 'app-credit-dialog',
  templateUrl: './credit-dialog.component.html',
  styleUrls: ['./credit-dialog.component.css']
})
export class CreditDialogComponent implements OnInit {
  public minInitialFee = 0;
  public maxInitialFee = 0;
  public stepInitialFee = 0;
  public valueInitialFee = 0;
  public percentValueInitialFee = 10;
  public valuePayPerMonth = 1000;
  public valueTermCredit = 600;
  public maxValueTermCredit = 600;
  public maxvaluePayPerMonth = 50000;
  public ramainder = this.data.car.price - this.data.car.discount;
  public year = 50;
  public summPaid = 600000;
  public paidPerMonth = 9800;
  public percentRate = 18.3;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private dialog: MatDialog,
              public dialogRef: MatDialogRef<CreditDialogComponent>) { }

  initialFee(): void {
    const min = 10;
    const max = 90;
    const step = 5;
    this.minInitialFee = this.data.car.price * min / 100;
    this.maxInitialFee = this.data.car.price * max / 100;
    this.stepInitialFee =  this.data.car.price * step / 100;
    this.valueInitialFee = Math.round(this.minInitialFee);
    this.ramainder = this.data.car.price - this.data.car.discount - this.valueInitialFee;
  }

  changeValueInitialFee(event: any): void {
    this.ramainder = this.data.car.price - this.data.car.discount - this.valueInitialFee;
    this.valueInitialFee = Math.round(event.target.value);
    this.percentValueInitialFee = Math.round((event.target.value / this.data.car.price) * 100);
    this.creditProgramm();
  }

  changeValuePayPerMonth(event: any): void {
    this.valuePayPerMonth = +event.target.value;
    this.valueTermCredit = this.maxValueTermCredit - (this.valuePayPerMonth / 1000) * 12 + 12;
    this.year = this.valueTermCredit / 12;
    this.creditProgramm();
  }

  declOfNum(number: number): string {
    const titles = ['год', 'года', 'лет'];
    const cases = [2, 0, 1, 1, 1, 2];
    return number + ' ' + titles[ (number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5] ];
  }

  changeValueTermCredit(event: any): void {
    this.valueTermCredit = event.target.value;
    this.year = this.valueTermCredit / 12;
    this.valuePayPerMonth = this.maxvaluePayPerMonth - this.year * 1000 + 1000;
    this.creditProgramm();
  }

  creditProgramm(): void {
    this.calcSummPaid();
    if (this.valueInitialFee > 200000 && this.valuePayPerMonth < 10000 && this.valueTermCredit > 400) {
      this.percentRate = 18.3;
      this.paidPerMonth = 9800;
    } else if (this.valueInitialFee > 400000 && this.valuePayPerMonth < 20000 && this.valueTermCredit > 300) {
      this.percentRate = 16.2;
      this.paidPerMonth = 18200;
    } else if (this.valueInitialFee > 600000 && this.valuePayPerMonth < 30000 && this.valueTermCredit > 200) {
      this.percentRate = 14.6;
      this.paidPerMonth = 25500;
    } else if (this.valueInitialFee > 800000 && this.valuePayPerMonth < 40000 && this.valueTermCredit > 100) {
      this.percentRate = 12.3;
      this.paidPerMonth = 37100;
    } else if (this.valueInitialFee > 1000000 && this.valuePayPerMonth <= 50000 && this.valueTermCredit > 50) {
      this.percentRate = 10.8;
      this.paidPerMonth = 44900;
    }
  }

  calcSummPaid(): void {
    this.summPaid = this.valuePayPerMonth * this.valueTermCredit;
  }

  openDialog(): void {
    this.dialog.open(SuccessCreditDialogComponent);
    this.closeCreditDialog();
  }

  // tslint:disable-next-line:typedef
  closeCreditDialog() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.initialFee();
  }

}
