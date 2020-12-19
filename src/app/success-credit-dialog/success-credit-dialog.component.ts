import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-success-credit-dialog',
  templateUrl: './success-credit-dialog.component.html',
  styleUrls: ['./success-credit-dialog.component.css']
})
export class SuccessCreditDialogComponent implements OnInit {


  constructor(private dialogRef: MatDialogRef<SuccessCreditDialogComponent>) { }

  // tslint:disable-next-line:typedef
  closeDialog() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
