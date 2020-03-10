import { Component, OnInit, Input, Output } from '@angular/core';
import Siema from 'siema';
import { RentObject } from 'src/shared/models/rent-object';
import { EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-map-info-cards',
  templateUrl: './map-info-cards.component.html',
  styleUrls: ['./map-info-cards.component.scss']
})
export class MapInfoCardsComponent implements OnInit {

  @Input() public rentObjects: RentObject[];
  @Input() public rentObjectActive: BehaviorSubject<number>;

  @Output() triggerBookRent: EventEmitter<string> = new EventEmitter<string>();

  private siema: any;

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    this.siema = new Siema({
      selector: '.siema',
      duration: 200,
      easing: 'ease-out',
      perPage: 1,
      draggable: true,
      multipleDrag: true,
      threshold: 20,
      loop: false,
    });
    this.rentObjectActive.subscribe(active => this.siema.goTo(active));
  }

  public triggerBookRentObject(id: string) {
    this.triggerBookRent.emit(id);
  }

}
