import { Component, OnInit } from '@angular/core';
import { PlacesService } from 'src/shared/services/places.service';
import { RentObject } from 'src/shared/models/rent-object';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-map-data-wrapper',
  templateUrl: './map-data-wrapper.component.html',
  styleUrls: ['./map-data-wrapper.component.scss']
})
export class MapDataWrapperComponent implements OnInit {

  public rentObjectActive = new BehaviorSubject(0);
  public rentObjects: RentObject[] = [];

  constructor(public placesService: PlacesService) { }

  ngOnInit() {
    this.placesService.getRentAt().subscribe(rentObject => {
      this.rentObjects.push(rentObject);
    });
  }

  triggerBookRentObject(id: string) {
    this.placesService.bookPlace(id);
    console.log("placesService bookPlace invoke");
  }

  changeSlideActive(id: string) {
    this.rentObjectActive.next(this.rentObjects.findIndex((rentObject)=> rentObject.id === id));
  }
}
