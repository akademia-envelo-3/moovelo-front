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

  getAnswers() {
    return this.http.get<EventSurvey['answers']>(this.apiUrl + '/eventSurveys');
  }

  sendAnswerId(answerId: number) {
    return this.http.get<EventSurvey[]>(this.apiUrl + '/eventSurveys?id=0').subscribe(data => {
      console.log(data[0].yourAnswersIds[0].id);
    });
  }
}
