import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Manufacturers } from '../models/manufacturers';

@Injectable({
  providedIn: 'root'
})

export class HttpService{

  constructor( private http: HttpClient ){ }

  getCarList(): Observable<Manufacturers> {
    return this.http.get<Manufacturers>('../assets/carList.json');
  }
}
