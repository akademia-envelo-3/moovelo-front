import { Injectable } from '@angular/core';
import * as leaflet from 'leaflet';

@Injectable({
  providedIn: 'root',
})
export class EventMapMarkerService {
  constructor() {}

  private circle = leaflet.circle([52.24, 21.0], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 5,
  });

  addCircle() {
    return this.circle;
  }
}
