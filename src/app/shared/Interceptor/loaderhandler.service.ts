import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { requestUrlWithoutLoader } from './requestHelperForLoader';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private http = inject(HttpClient);
  private isLoading$$ = new BehaviorSubject(false);
  private jobs: number[] = [];

  get isLoading$() {
    return this.isLoading$$.asObservable();
  }
  show() {
    this.jobs.push(0);
    this.isLoading$$.next(true);
  }

  hide() {
    this.jobs.pop();
    if (this.jobs.length === 0) {
      this.isLoading$$.next(false);
    }
  }

  noLoaderGETMethod<Type>(url: string) {
    return this.http.get<Type>(requestUrlWithoutLoader(url));
  }
}
