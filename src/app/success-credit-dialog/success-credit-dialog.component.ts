import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {CreditProgramm} from '../models/creditProgramm';

@Component({
  selector: 'app-success-credit-dialog',
  templateUrl: './success-credit-dialog.component.html',
  styleUrls: ['./success-credit-dialog.component.css']
})
export class SuccessCreditDialogComponent implements OnInit {


  constructor(private dialogRef: MatDialogRef<SuccessCreditDialogComponent>,
              @Inject (MAT_DIALOG_DATA) private creditProgramm: CreditProgramm) { }

  log(): void {
    console.log(this.creditProgramm);
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.log();
  }

}
