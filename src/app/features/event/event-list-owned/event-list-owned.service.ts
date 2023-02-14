import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_URL } from '@core/env.token';
import { EventCard } from '../event.interfaces';

@Injectable()
export class EventListOwnedService {
  private http = inject(HttpClient);
  private apiUrl = inject(API_URL);

  getOwnedGroups(userId: number) {
    return this.http.get<EventCard[]>(this.apiUrl + `ownedEvents?eventOwner.userId=${userId}`);
  }
}
