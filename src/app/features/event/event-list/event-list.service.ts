import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_URL } from '@core/env.token';
import { EventCard } from '../event.interfaces';

@Injectable({
  providedIn: 'root',
})
export class EventListService {
  private http = inject(HttpClient);
  private apiUrl = inject(API_URL);

  getAllEvents() {
    return this.http.get<EventCard[]>(this.apiUrl + '/events');
  }
}
