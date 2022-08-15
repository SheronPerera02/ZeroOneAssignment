import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import Dvd from './home/add-dvd/dvd.model';
import RentedRecord from './home/view-rented/rented-record.model';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  dvdsChanged = new Subject<Array<Dvd>>();
  rentedRecordsChanged = new Subject<Array<RentedRecord>>();

  dvds: Array<Dvd> = [];
  rentedRecords: Array<RentedRecord> = [];

  addDvd(data: Dvd): void {
    this.dvds.push(data);
    this.dvdsChanged.next(this.dvds.slice());
  }

  getDvds(): Array<Dvd> {
    return this.dvds.slice();
  }

  addRentedRecord(data: RentedRecord): void {
    this.rentedRecords.push(data);

    const updatedDvds = this.dvds.map((dvd) => {
      if (dvd.id === data.dvd.id) {
        return { ...dvd, noOfCopies: dvd.noOfCopies - 1 };
      }
      return dvd;
    });

    this.dvds = updatedDvds;

    this.dvdsChanged.next(this.dvds.slice());
  }

  getRentedRecords(): Array<RentedRecord> {
    return this.rentedRecords.slice();
  }

  returnDvd(record: RentedRecord): void {
    const updatedDvds = this.dvds.map((dvd) => {
      if (dvd.id === record.dvd.id) {
        return { ...dvd, noOfCopies: dvd.noOfCopies + 1 };
      }
      return dvd;
    });

    this.dvds = updatedDvds;

    const updatedRentedRecords = this.rentedRecords.map((recordObj) => {
      if (recordObj.id === record.id) {
        return {
          ...recordObj,
          status: 'Returned',
        };
      }
      return recordObj;
    });

    this.rentedRecords = updatedRentedRecords;

    this.rentedRecordsChanged.next(this.rentedRecords.slice());
  }
}
