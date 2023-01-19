import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_URL } from '@core/env.token';
import { combineLatest, map } from 'rxjs';

interface searchResult {
  events: event[];
  groups: group[];
}

interface event {
  id: number;
  name: string;
}

interface group {
  id: number;
  name: string;
}

@Injectable()
export class SearchBarService {
  private API_URL = inject(API_URL);
  private http = inject(HttpClient);

  search(value: string) {
    combineLatest([
      this.http.get<event[]>(`${this.API_URL}events?name_like=${value}`),
      this.http.get<event[]>(`${this.API_URL}groups?name_like=${value}`),
    ])
      .pipe(
        map(result => {
          return {
            events: result[0],
            groups: result[1],
          };
        })
      )
      .subscribe(console.log);
  }
}
