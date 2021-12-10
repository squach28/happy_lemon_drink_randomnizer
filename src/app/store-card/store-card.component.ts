import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'store-card',
  templateUrl: './store-card.component.html',
  styleUrls: ['./store-card.component.css']
})
export class StoreCardComponent implements OnInit {

  constructor() { }

  @Input() address = '';
  @Input() name = '';
  @Input() number = '';

  ngOnInit(): void {
  }

}
