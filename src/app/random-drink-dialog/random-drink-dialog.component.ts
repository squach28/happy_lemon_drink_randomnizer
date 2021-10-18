import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-drink-dialog',
  templateUrl: './random-drink-dialog.component.html',
  styleUrls: ['./random-drink-dialog.component.css']
})
export class RandomDrinkDialogComponent implements OnInit {

  public drinkName: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
