import { Injectable } from '@angular/core';
import * as leaflet from 'leaflet';

@Injectable({
  providedIn: 'root',
})
export class EventMapMarkerService {
  private markerCoordinates?: { altitude: number; latitude: number };

  passCoordinates(coordinates: { altitude: number; latitude: number }) {
    this.markerCoordinates = coordinates;
  }

  addCircle() {
    if (!this.markerCoordinates) {
      return;
    }
    const circle = leaflet.circle([this.markerCoordinates.altitude, this.markerCoordinates.latitude], {
      color: '#bd1c1c',
      fillColor: '#bd1c1c',
      fillOpacity: 0.5,
      radius: 5,
    });
    return circle;
  }
}
