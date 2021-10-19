import { Component, OnInit } from '@angular/core';
import { RandomToppingService } from '../random-topping.service';
import { RandomSweetnessService } from '../random-sweetness.service';

@Component({
  selector: 'app-random-drink-dialog',
  templateUrl: './random-drink-dialog.component.html',
  styleUrls: ['./random-drink-dialog.component.css']
})
export class RandomDrinkDialogComponent implements OnInit {

  public drinkName: string = '';
  public imageUrl: string = '';
  public randomTopping: string = '';
  public randomSweetness: string ='';
  public showTopping: boolean = false;
  public showSweetness: boolean = false;

  constructor(private randomToppingService: RandomToppingService, private randomSweetnessService: RandomSweetnessService) { }

  ngOnInit(): void {
  }

  public toggleTopping() {
    this.randomToppingService.getRandomTopping().subscribe((topping) => {
      this.randomTopping = topping['value'];
      this.showTopping = !this.showTopping;
    });

  }

  public toggleSweetness() {
    this.randomSweetnessService.getRandomSweetness().subscribe((sweetness) => {
      this.randomSweetness = sweetness['value'];
      this.showSweetness = !this.showSweetness;
    });
  }

}
