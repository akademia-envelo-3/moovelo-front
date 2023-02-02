import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_URL } from '@core/env.token';
import { GroupMembersExtended } from '../../group.interface';

@Injectable({
  providedIn: 'root',
})
export class GroupUsersService {
  private http = inject(HttpClient);
  private apiUrl = inject(API_URL);

  getParticipants(groupId: number) {
    return this.http.get<GroupMembersExtended>(this.apiUrl + `/mockedGropuUsers/${groupId}`);
  }
}
