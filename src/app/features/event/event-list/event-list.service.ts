import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_URL } from '@core/env.token';
import { EventCard, FilterValue, SortValue } from '../event.interfaces';
import { ReplaySubject } from 'rxjs';
import { Category } from '../single-event/single-event.interface';

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

  private createEndpoint(sort: SortValue, filter: FilterValue[], category: string | null) {
    const filterString = filter.length ? '&' + filter.join('&') : '';
    const categoryString = category ? '&cat=' + category : '';

    return `${this.apiUrl}/events?${sort}${filterString}${categoryString}`;
  }

  getAllEvents(sort: SortValue = 'sortOrder=desc', filter: FilterValue[], category: string | null) {
    const endpoint = this.createEndpoint(sort, filter, category);
    this.http.get<EventCard[]>(endpoint).subscribe(result => {
      this.events$$.next(result);
    });
  }

  getCategories() {
    return this.http.get<Category[]>(`${this.apiUrl}/categories?visibility=true`);
  }
}
