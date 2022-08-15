import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DataStorageService } from 'src/app/data-storage.service';
import Dvd from './dvd.model';

@Component({
  selector: 'app-add-dvd',
  templateUrl: './add-dvd.component.html',
  styleUrls: ['./add-dvd.component.scss'],
})
export class AddDvdComponent implements OnInit, OnDestroy {
  sub: Subscription;

  popupVisible = false;

  form: FormGroup;

  dvds: Array<Dvd>;

  selectedDvd: Dvd;

  constructor(private dataStorageService: DataStorageService) {
    this.dvds = dataStorageService.getDvds();

    this.sub = dataStorageService.dvdsChanged.subscribe((dvds: Array<Dvd>) => {
      this.dvds = dvds;
    });
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      movieName: new FormControl(''),
      noOfCopies: new FormControl(''),
      year: new FormControl(''),
      price: new FormControl(''),
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  openPopup(dvd: Dvd): void {
    this.popupVisible = true;
    this.selectedDvd = dvd;
  }

  closePopup(): void {
    this.popupVisible = false;
  }

  onSubmit(): void {
    const dvdsLength = this.dataStorageService.dvds.length;

    const id = dvdsLength === 0 ? 1 : dvdsLength + 1;

    const formData = this.form.value;

    const dvd = new Dvd(
      id,
      formData.movieName,
      +formData.noOfCopies,
      +formData.year,
      +formData.price
    );

    this.dataStorageService.addDvd(dvd);

    this.onResetForm();
  }

  onResetForm(): void {
    this.form.reset();
  }
}
