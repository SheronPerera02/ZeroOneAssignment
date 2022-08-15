import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataStorageService } from 'src/app/data-storage.service';
import RentedRecord from '../../view-rented/rented-record.model';
import Dvd from '../dvd.model';

@Component({
  selector: 'app-rent-dvd-popup',
  templateUrl: './rent-dvd-popup.component.html',
  styleUrls: ['./rent-dvd-popup.component.scss'],
})
export class RentDvdPopupComponent implements OnInit {
  @Output() closePopup = new EventEmitter();

  form: FormGroup;

  @Input() dvd: Dvd;

  constructor(private dataStorageService: DataStorageService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      customerName: new FormControl(''),
      mobileNumber: new FormControl(''),
      nic: new FormControl(''),
    });
  }

  cancel(): void {
    this.closePopup.emit();
  }

  submit(): void {
    const dvdsLength = this.dataStorageService.rentedRecords.length;

    const id = dvdsLength === 0 ? 1 : dvdsLength + 1;

    const formData = this.form.value;

    const rentedRecord = new RentedRecord(
      id,
      formData.customerName,
      formData.mobileNumber,
      formData.nic,
      this.dvd,
      'Rented'
    );

    this.dataStorageService.addRentedRecord(rentedRecord);

    this.closePopup.emit();
  }
}
