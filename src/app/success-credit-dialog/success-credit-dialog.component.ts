import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {CreditProgram} from '../models/creditProgram';

@Component({
  selector: 'app-success-credit-dialog',
  templateUrl: './success-credit-dialog.component.html',
  styleUrls: ['./success-credit-dialog.component.css']
})
export class SuccessCreditDialogComponent implements OnInit {


  constructor(private dialogRef: MatDialogRef<SuccessCreditDialogComponent>,
              @Inject (MAT_DIALOG_DATA) private creditProgram: CreditProgram) { }

  log(): void {
    console.log(this.creditProgram);
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.log();
  }

}
