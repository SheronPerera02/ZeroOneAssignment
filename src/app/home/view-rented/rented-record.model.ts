import Dvd from "../add-dvd/dvd.model";

export default class RentedRecord {
  public id: number;
  public customerName: string;
  public mobileNumber: string;
  public nic: string;
  public dvd: Dvd;
  public status: string;

  constructor(
    id: number,
    customerName: string,
    mobileNumber: string,
    nic: string,
    dvd: Dvd,
    status: string
  ) {
    this.id = id;
    this.customerName = customerName;
    this.mobileNumber = mobileNumber;
    this.nic = nic;
    this.dvd = dvd;
    this.status = status;
  }
}
