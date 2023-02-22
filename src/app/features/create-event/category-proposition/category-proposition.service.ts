import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_URL } from '@core/env.token';
import { CategoryPropositionForm } from '../create-event.interface';

@Injectable()
export class CategoryPropositionService {
  private http = inject(HttpClient);
  private apiUrl = inject(API_URL);

  postCategoryProposition(categoryPropositionForm: CategoryPropositionForm) {
    return this.http.post<CategoryPropositionForm>(this.apiUrl + '/categoryProposal', categoryPropositionForm);
  }
}
