import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_URL } from '@core/env.token';
import { CategoryItemResponse } from '../category.interface';

@Injectable({
  providedIn: 'root',
})
export class CategoryListApiService {
  private http = inject(HttpClient);
  private apiUrl = inject(API_URL);

  getCategories() {
    return this.http.get<CategoryItemResponse[]>(this.apiUrl + '/categories');
  }

  patchCategoryVisibility(categoryId: number, visibility: boolean) {
    return this.http.patch<CategoryItemResponse>(this.apiUrl + `/categories/${categoryId}`, { isVisible: visibility });
  }

  patchCategoryName(categoryId: number, name: string) {
    return this.http.patch<CategoryItemResponse>(this.apiUrl + `/categories/${categoryId}`, { name });
  }
}
