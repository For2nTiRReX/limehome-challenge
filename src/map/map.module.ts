import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './components/map/map.component';
import { MapInfoCardsComponent } from './components/map-info-cards/map-info-cards.component';
import { MapDataWrapperComponent } from './components/map-data-wrapper/map-data-wrapper.component';

@NgModule({
  declarations: [MapComponent, MapInfoCardsComponent, MapDataWrapperComponent],
  exports: [MapDataWrapperComponent],
  imports: [
    CommonModule
  ]
})
export class MapModule { }
