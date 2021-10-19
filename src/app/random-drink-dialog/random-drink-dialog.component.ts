import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-drink-dialog',
  templateUrl: './random-drink-dialog.component.html',
  styleUrls: ['./random-drink-dialog.component.css']
})
export class RandomDrinkDialogComponent implements OnInit {

  public drinkName: string = '';
  public imageUrl: string = '';
  public showTopping: boolean = false;
  public showSweetness: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public toggleTopping() {
    this.showTopping = !this.showTopping;
  }

  public toggleSweetness() {
    this.showSweetness = !this.showSweetness;
  }

}
