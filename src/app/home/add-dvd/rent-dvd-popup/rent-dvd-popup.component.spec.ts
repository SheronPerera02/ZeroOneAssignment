import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentDvdPopupComponent } from './rent-dvd-popup.component';

describe('RentDvdPopupComponent', () => {
  let component: RentDvdPopupComponent;
  let fixture: ComponentFixture<RentDvdPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentDvdPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentDvdPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
