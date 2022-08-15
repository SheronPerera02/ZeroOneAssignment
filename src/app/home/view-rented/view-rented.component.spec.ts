import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRentedComponent } from './view-rented.component';

describe('ViewRentedComponent', () => {
  let component: ViewRentedComponent;
  let fixture: ComponentFixture<ViewRentedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRentedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewRentedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
