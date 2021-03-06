import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomDrinkService {
  // https://boiling-cliffs-76029.herokuapp.com/drinks/getRandomDrink

  constructor(private http: HttpClient) { }

  private url: string = 'https://boiling-cliffs-76029.herokuapp.com/drink/getRandomDrink';

  getRandomDrink(): Observable<any> {
    return this.http.get(this.url);
  }


}
