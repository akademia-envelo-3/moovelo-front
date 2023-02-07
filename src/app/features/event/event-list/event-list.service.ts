import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_URL } from '@core/env.token';
import { EventCard, SortValue } from '../event.interfaces';
import { ReplaySubject } from 'rxjs';

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

  getAllEvents(sort: SortValue = 'sortOrder=desc') {
    this.http.get<EventCard[]>(this.apiUrl + '/events?' + sort).subscribe(result => {
      this.events$$.next(result);
    });
  }
}
