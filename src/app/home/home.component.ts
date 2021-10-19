import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RandomDrinkService } from '../random-drink.service';
import { RandomDrinkDialogComponent } from '../random-drink-dialog/random-drink-dialog.component';
import { RandomImageService } from '../random-image.service';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private randomDrinkService: RandomDrinkService, private randomImageService: RandomImageService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public getRandomDrink() {
    console.log('clicked');
    this.randomDrinkService.getRandomDrink();
  }

  public showDialog() {
    const drinkName = this.randomDrinkService.getRandomDrink().subscribe((value) => {
      console.log(value['value']);
      const imageUrl = this.randomImageService.getRandomImage().subscribe((image) => {
        const dialogRef = this.dialog.open(RandomDrinkDialogComponent);
        dialogRef.componentInstance.drinkName = value['value'];
        dialogRef.componentInstance.imageUrl = image['value'];
     
     
         dialogRef.afterClosed().subscribe(result => {
           console.log(`Dialog result: ${result}`);
         });
      });

    });

  }


}
