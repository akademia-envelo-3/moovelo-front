import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { API_URL } from '@core/env.token';
import { EventComment } from '../event.interfaces';

@Injectable()
export class EventCommentService {
  private http = inject(HttpClient);
  private apiUrl = inject(API_URL);

  getComments() {
    return this.http.get<EventComment[]>(this.apiUrl + '/comments');
  }
}
