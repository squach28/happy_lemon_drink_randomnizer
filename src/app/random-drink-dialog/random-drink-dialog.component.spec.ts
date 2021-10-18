import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomDrinkDialogComponent } from './random-drink-dialog.component';

describe('RandomDrinkDialogComponent', () => {
  let component: RandomDrinkDialogComponent;
  let fixture: ComponentFixture<RandomDrinkDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomDrinkDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomDrinkDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
