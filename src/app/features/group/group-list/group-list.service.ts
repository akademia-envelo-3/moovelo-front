import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, catchError, of, retry } from 'rxjs';
import { GroupListItem } from '../group.interface';
import { GroupListError } from '../group.interface';

@Injectable()
export class GroupListService {
  private http = inject(HttpClient);
  private groupUrl = 'http://localhost:3000/groups';
  private error$$ = new BehaviorSubject<GroupListError>({ isError: false, errorStatus: 404 });

  get error$() {
    return this.error$$.asObservable();
  }

  getAllGroups() {
    return this.http.get<GroupListItem[]>(this.groupUrl).pipe(
      retry(3),
      catchError(err => {
        this.error$$.next({ isError: true, errorStatus: err.status });
        return of();
      })
    );
  }
}
