import { Injectable } from '@angular/core';
import { from, of } from 'rxjs';
import { RentObject } from '../models/rent-object';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  mockRentObjects: RentObject[];

  constructor() { 
    this.mockRentObjects = [
      {
        id: "276jx7ps-b9db5d9dd7ca028da524f98c06012a20",
        title: 'Hotel Riversidelonger',
        distance: 430,
        position: [ 52.52257,13.38666 ],
        description: "Designs may vary",
        price: 89,
        img: "../assets/example-image.jpg"
      },
      {
        id: "276u33db-7af315e7309e47b6956b7cc0e0fb1c44",
        title: 'Leonardo Hotel',
        distance: 362,
        position: [ 52.52372,13.38363 ],
        description: "Designs may vary",
        price: 89,
        img: "../assets/example-image.jpg"
      },
      {
        id: "276u33db-af02fef86a034d408577acd77906983e",
        title: 'Riversidesome Hotel',
        distance: 546,
        position: [ 52.522991,13.388084 ],
        description: "Designs may vary",  
        price: 89,
        img: "../assets/example-image.jpg"
      }
    ];  
  }

  public getRentAt(lat: Number = 52.521,lng: Number = 13.3807, category: String = "Hotel") {
    return from(this.mockRentObjects);
  }

  public bookPlace(id: string = "276jx7ps-b9db5d9dd7ca028da524f98c06012a20") {
    return of({result: "Success!"})
  }
}
