import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }

  private url: string = 'https://boiling-cliffs-76029.herokuapp.com/location/';

  getLocations(): Observable<any> {
    return this.http.get(this.url + 'getLocations');
  }

}
