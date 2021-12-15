import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations'
import { MatDialogModule} from '@angular/material/dialog';
import { HomeComponent } from './home/home.component';
import { RandomDrinkDialogComponent } from './random-drink-dialog/random-drink-dialog.component';
import { StoreCardComponent } from './store-card/store-card.component';
import { StoresComponent } from './stores/stores.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,    
    NavBarComponent,
    HomeComponent,
    RandomDrinkDialogComponent,
    StoreCardComponent,
    StoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    MatDialogModule,    
    MatCardModule,
    MatProgressSpinnerModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
