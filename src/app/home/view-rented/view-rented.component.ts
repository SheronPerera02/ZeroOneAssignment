import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataStorageService } from 'src/app/data-storage.service';
import RentedRecord from './rented-record.model';

@Component({
  selector: 'app-view-rented',
  templateUrl: './view-rented.component.html',
  styleUrls: ['./view-rented.component.scss'],
})
export class ViewRentedComponent implements OnInit, OnDestroy {
  sub: Subscription;
  rentedRecords: Array<RentedRecord>;

  constructor(private dataStorageService: DataStorageService) {
    this.rentedRecords = dataStorageService.getRentedRecords();

    this.sub = dataStorageService.rentedRecordsChanged.subscribe((records) => {
      this.rentedRecords = records;
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  returnDvd(record: RentedRecord): void {
    this.dataStorageService.returnDvd(record);
  }
}
