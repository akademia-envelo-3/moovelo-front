import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_URL } from '@core/env.token';
import { combineLatest, map, BehaviorSubject } from 'rxjs';
import { Event, Group, SearchResult } from './search-bar.interface';

@Injectable()
export class SearchBarService {
  private API_URL = inject(API_URL);
  private http = inject(HttpClient);

  private searchResult$$ = new BehaviorSubject<SearchResult>({
    events: [],
    groups: [],
  });

  get searchResult$() {
    return this.searchResult$$.asObservable();
  }

  search(value: string) {
    // This whole combineLatest will be replaced with one endpoint.
    return combineLatest([
      this.http.get<Event[]>(`${this.API_URL}events?name_like=${value}`),
      this.http.get<Group[]>(`${this.API_URL}groups?name_like=${value}`),
    ])
      .pipe(
        map(result => {
          const [events, groups] = result;
          return {
            events: events,
            groups: groups,
          };
        })
      )
      .subscribe({
        next: response => this.searchResult$$.next(response),
      });
  }
}
