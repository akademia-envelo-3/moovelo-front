// http://[::1]:3000/groups?groupOwner.userId=1

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_URL } from '@core/env.token';
import { GroupListItem } from '../group.interface';

@Injectable()
export class GroupListOwnedService {
  private http = inject(HttpClient);
  private apiUrl = inject(API_URL);

  getOwnedGroups(userId: number) {
    return this.http.get<GroupListItem[]>(this.apiUrl + `/groups?groupOwner.userId=${userId}`);
  }
}
