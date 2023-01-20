import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_URL } from '@core/env.token';
import { SingleGroup } from '../group.interface';

@Injectable()
export class SingleGroupService {
  private http = inject(HttpClient);
  private apiUrl = inject(API_URL);

  getGroupInfo(groupId: string) {
    return this.http.get<SingleGroup>(this.apiUrl + `/groups/${groupId}`);
  }
}
