import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_URL } from '@core/env.token';
import { combineLatest } from 'rxjs';

@Injectable()
export class SearchBarService {
  private API_URL = inject(API_URL);
  private http = inject(HttpClient);

  search(value: string) {
    combineLatest();
  }
}
