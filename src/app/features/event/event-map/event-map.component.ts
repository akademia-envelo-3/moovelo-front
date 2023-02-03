import { ChangeDetectionStrategy, Component, AfterViewInit, inject } from '@angular/core';
import * as leaflet from 'leaflet';
import { EventMapMarkerService } from './event-map-marker.service';

@Component({
  selector: 'app-event-map',
  standalone: true,
  imports: [],
  templateUrl: `./event-map.component.html`,
  styleUrls: ['./event-map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventMapComponent {
  private map: leaflet.Map | leaflet.LayerGroup<any> | undefined;
  private eventMapMarkerService = inject(EventMapMarkerService);

  constructor() {}

  private initMap() {
    this.map = leaflet.map('map', {
      center: [52.24, 21.0],
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

  ngAfterViewInit(): void {
    this.initMap();
  }
}
