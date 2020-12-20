import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { MatDialog } from '@angular/material/dialog';
import { CreditDialogComponent } from '../credit-dialog/credit-dialog.component';
import { Car } from '../models/car';
import { CarListApiResponse } from '../models/carListApiResponse';
import { Manufacturer } from '../models/manufacturer';


@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})

export class CarListComponent implements OnInit {

  public quantityCarSumm = 0;
  public manufacturers: Array<Manufacturer> = [];

  constructor(private httpService: HttpService,
              public dialog: MatDialog) {
  }

  openDialog(car: Car): void {
    this.dialog.open(CreditDialogComponent, {data: car});
  }

  quantityCarSummCalc(): void {
    for (let car of this.manufacturers[0].carList) {
      this.quantityCarSumm = this.quantityCarSumm + car.quantity;
    }
  }

  ngOnInit(): void {
    this.httpService.getCarList().subscribe((data: CarListApiResponse) => {
      this.manufacturers = data.manufacturers;
      this.quantityCarSummCalc();
    });
  }

}
