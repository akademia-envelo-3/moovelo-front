import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import * as leaflet from 'leaflet';
import { EventMapMarkerService } from './event-map-marker.service';

@Component({
  selector: 'app-event-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: `./event-map.component.html`,
  styleUrls: ['./event-map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventMapComponent {
  private map: leaflet.Map | leaflet.LayerGroup<any> | undefined;
  private eventMapMarkerService = inject(EventMapMarkerService);
  isCoordinates = true;
  @Input() coordinates: any;

  get getCoordinates() {
    return this.coordinates;
  }

  private initMap() {
    this.map = leaflet.map('map', {
      center: [this.coordinates.altitude, this.coordinates.latitude],
      zoom: 17,
    });

    const tiles = leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 20,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    });

    this.eventMapMarkerService.addCircle().addTo(this.map);

    tiles.addTo(this.map);
  }

  ngOnChanges() {
    if (this.coordinates.altitude === null || this.coordinates.latitude === null) {
      this.isCoordinates = false;
    }
    this.isCoordinates = true;
    this.eventMapMarkerService.passCoordinates(this.coordinates);
    this.initMap();
    console.log(this.isCoordinates)
  }
}
