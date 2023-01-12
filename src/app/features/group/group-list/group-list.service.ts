import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { GroupListItem } from '../group.interface';

@Injectable()
export class GroupListService {
  private http = inject(HttpClient);
  private groupUrl = 'http://localhost:3000/groups';

  getAllGroups() {
    return this.http.get<GroupListItem[]>(this.groupUrl).pipe(
      catchError(err => {
        return throwError(() => new Error(err));
      })
    );
  }
}
