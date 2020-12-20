import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarListApiResponse } from '../models/carListApiResponse';

@Injectable({
  providedIn: 'root'
})

export class HttpService{

  constructor( private http: HttpClient ){ }

  getCarList(): Observable<CarListApiResponse> {
    return this.http.get<CarListApiResponse>('../assets/carList.json');
  }
}
