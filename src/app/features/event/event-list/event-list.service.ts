import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_URL } from '@core/env.token';
import { BehaviorSubject, of, catchError, retry } from 'rxjs';
import { EventCard, EventListError } from '../event.interfaces';

@Injectable({
  providedIn: 'root',
})
export class EventListService {
  private http = inject(HttpClient);
  private errors$$ = new BehaviorSubject<EventListError>({ isError: false, errorStatus: 404 });
  private apiUrl = inject(API_URL);

  get errors$() {
    return this.errors$$.asObservable();
  }

  getAllEvents() {
    return this.http.get<EventCard[]>(this.apiUrl + '/events').pipe(
      retry(3),
      catchError(err => {
        this.errors$$.next({ isError: true, errorStatus: err.status });
        return of();
      })
    );
  }
}
