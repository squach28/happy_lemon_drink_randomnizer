import { Component, OnInit } from '@angular/core';
import { RandomDrinkService } from '../random-drink.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private randomDrinkService: RandomDrinkService) { }

  ngOnInit(): void {
  }

  public getRandomDrink() {
    console.log('clicked');
    this.randomDrinkService.getRandomDrink();
  }

}
