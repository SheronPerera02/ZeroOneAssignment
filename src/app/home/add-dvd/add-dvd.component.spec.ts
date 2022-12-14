import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDvdComponent } from './add-dvd.component';

describe('AddDvdComponent', () => {
  let component: AddDvdComponent;
  let fixture: ComponentFixture<AddDvdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDvdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDvdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
