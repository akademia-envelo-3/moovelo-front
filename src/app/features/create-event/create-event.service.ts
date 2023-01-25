import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { API_URL } from '@core/env.token';
import { EventCategories, Group } from './create-event.interface';

@Injectable({
  providedIn: 'root',
})
export class CreateEventService {
  private API_URL = inject(API_URL);
  private http = inject(HttpClient);

  fetchUserGroups() {
    // this endpoint will be replaced with endpoint that contains user id
    return this.http.get<Group[]>(`${this.API_URL}/groups`);
  }

  getAllCategories() {
    return this.http.get<EventCategories[]>(this.API_URL + '/eventCategories');
  }
}
