import { Component, OnInit } from '@angular/core';
import { HttpService } from "../services/http.service";

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})

export class CarListComponent implements OnInit {

  public manufacturers: any;

  constructor(private httpService : HttpService) {
  }


  ngOnInit(): void {
    this.httpService.getCarList().subscribe((data: any) => {
      this.manufacturers = data.manufacturers;
    })
  }

}
