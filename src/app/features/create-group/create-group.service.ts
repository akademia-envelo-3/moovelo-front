import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_URL } from '@core/env.token';
import { CreateGroup, CreateGroupResponse } from './create-group.interface';

@Injectable()
export class CreateGroupService {
  private http = inject(HttpClient);
  private apiUrl = inject(API_URL);

  postNewGroup(newGroup: CreateGroup) {
    return this.http.post<CreateGroupResponse>(this.apiUrl + '/group', newGroup);
  }
}
