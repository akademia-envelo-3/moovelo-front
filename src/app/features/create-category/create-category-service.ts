import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_URL } from '@core/env.token';
import { CategoryItem, CategoryItemResponse } from '../category/category.interface';

@Injectable({
  providedIn: 'root',
})
export class CreateCategoryService {
  private http = inject(HttpClient);
  private apiUrl = inject(API_URL);

  postNewCategory(category: CategoryItem) {
    return this.http.post<CategoryItemResponse>(this.apiUrl + '/categories', category);
  }
}
