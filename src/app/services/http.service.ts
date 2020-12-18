import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HttpService{

  constructor(private http: HttpClient){ }

  getCarList(): Observable<object> {
    return this.http.get('../assets/carList.json');
  }
}
