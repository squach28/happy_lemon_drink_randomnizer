import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent implements OnInit {

  mapOptions = {
    center: {lat: 37.372040, lng: -121.848836}
  };

  constructor(private locationService: LocationService) { 

  }

  ngOnInit(): void {
    console.log(this.locations);
    this.getLocations();
    console.log(this.locations.length);
  }

  locations: any = [];

  public getLocations() {
    this.locationService.getLocations().subscribe((value) => {
      console.log(value);
      this.locations = value;
    });
  }
}
