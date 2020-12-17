import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: "root"
})

export class HttpService{

  constructor(private http: HttpClient){ }

  getCarList() {
    return this.http.get('../assets/carList.json')
  }
}
