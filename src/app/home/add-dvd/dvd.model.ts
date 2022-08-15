export default class Dvd {
  public id: number;
  public movieName: string;
  public noOfCopies: number;
  public year: number;
  public price: number;

  constructor(
    id: number,
    movieName: string,
    noOfCopies: number,
    year: number,
    price: number
  ) {
    this.id = id;
    this.movieName = movieName;
    this.noOfCopies = noOfCopies;
    this.year = year;
    this.price = price;
  }
}
