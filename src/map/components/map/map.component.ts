import { Component, OnInit, ViewChild, ElementRef, Input, HostListener, Output } from '@angular/core';
import { environment } from '../../../environments/environment';
import { RentObject } from 'src/shared/models/rent-object';
import { EventEmitter } from '@angular/core';

declare var H: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  private platform: any;

  private map: any;
  
  private markersGroup: any;

  private behavior: any;
  
  @Input() rentObjects: RentObject[];

  @Output() changeSlideActive: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild("map")
  public mapElement: ElementRef;

  constructor() {
    this.platform = new H.service.Platform({
      "apikey": environment.hereApiKey
    });
  } 

  public ngOnInit() { 
    //console.log(this.rentObjects);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.map.getViewPort().resize();
  }

  public ngAfterViewInit() {
    let defaultLayers = this.platform.createDefaultLayers();
    this.map = new H.Map(
      this.mapElement.nativeElement,
      defaultLayers.vector.normal.map,
      {
        zoom: 14,
        center: { lat: 52.521, lng: 13.3807 }
      }
    );
    
    this.addMarkersToMap(this.map);
    this.addMarkersEventListener(this.markersGroup);
    new H.mapevents.Behavior(new H.mapevents.MapEvents(this.map));
  }

  addMarkersEventListener(markersGroup) {
    markersGroup.addEventListener('tap', (evt) => {
      this.changeSlideActive.emit(evt.target.data.id);
    }, false);
  }

  addMarkerToGroup(group, coordinate, data) {
    const marker = new H.map.Marker(coordinate);
    // add custom data to the marker
    marker.setData(data);
    group.addObject(marker);
  }

  addMarkersToMap(map) {
    const markersGroup = new H.map.Group();
    map.addObject(markersGroup);
   
    this.rentObjects.forEach(({id, position}) => {
      const [lat,lng] = position;
      this.addMarkerToGroup(markersGroup, {lat, lng}, {id});
    });
    this.markersGroup = markersGroup;
}

}
