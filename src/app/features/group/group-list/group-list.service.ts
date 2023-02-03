import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_URL } from '@core/env.token';
import { GroupListItem } from '../group.interface';

@Injectable()
export class GroupListService {
  private http = inject(HttpClient);
  private apiUrl = inject(API_URL);

  getAllGroups() {
    return this.http.get<GroupListItem[]>(this.apiUrl + '/groups');
  }
}
