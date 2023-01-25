import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { API_URL } from '@core/env.token';
import { EventSurvey } from '../event.interfaces';

@Injectable()
export class EventSurveyService {
  private http = inject(HttpClient);
  private apiUrl = inject(API_URL);

  getSurveys() {
    return this.http.get<EventSurvey[]>(this.apiUrl + '/eventSurveys');
  }
}
