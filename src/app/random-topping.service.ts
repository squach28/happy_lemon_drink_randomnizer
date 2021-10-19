import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomToppingService {

  constructor(private http: HttpClient) { }

  private url: string = 'https://boiling-cliffs-76029.herokuapp.com/topping/getRandomTopping';

  getRandomTopping(): Observable<any> {
    return this.http.get(this.url);
  }}
