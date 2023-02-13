import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_URL } from '@core/env.token';
import { EventCard } from '../event.interfaces';
import { ReplaySubject } from 'rxjs';
import { Category } from '../single-event/single-event.interface';
import { GetEventPayload } from './event-list.interface';

@Injectable({
  providedIn: 'root',
})
export class EventListService {
  private http = inject(HttpClient);
  private apiUrl = inject(API_URL);

  private events$$ = new ReplaySubject<EventCard[]>(1);

  get events$() {
    return this.events$$.asObservable();
  }

  private createEndpoint({ sort = 'sortOrder=desc', filter, category }: GetEventPayload) {
    const filterString = filter.length ? '&' + filter.join('&') : '';
    const categoryString = category ? '&cat=' + category : '';

    return `${this.apiUrl}/events?${sort}${filterString}${categoryString}`;
  }

  getAllEvents({ sort = 'sortOrder=desc', filter, category }: GetEventPayload) {
    const endpoint = this.createEndpoint({ sort, filter, category });
    return this.http.get<EventCard[]>(endpoint);
  }

  getCategories() {
    return this.http.get<Category[]>(`${this.apiUrl}/categories?visibility=true`);
  }
}
