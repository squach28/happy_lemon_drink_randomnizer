import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomImageService {


  constructor(private http: HttpClient) { }

  private url: string = 'https://boiling-cliffs-76029.herokuapp.com/image/getRandomImage';

  getRandomImage(): Observable<any> {
    return this.http.get(this.url);
  }
}
