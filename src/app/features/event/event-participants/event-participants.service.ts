import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_URL } from '@core/env.token';
import { EventParticipants } from '../event.interfaces';

@Injectable({
  providedIn: 'root',
})
export class EventParticipantsService {
  private http = inject(HttpClient);
  private apiUrl = inject(API_URL);

  getParticipants(userStatus: string, eventId: number) {
    return this.http.get<EventParticipants>(this.apiUrl + `/${userStatus}/${eventId}`);
  }
}
