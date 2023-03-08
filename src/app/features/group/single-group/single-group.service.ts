import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_URL } from '@core/env.token';
import { useStore } from '@shared/inject-hooks/user-store';
import { combineLatest, map, ReplaySubject } from 'rxjs';
import { selectUserId, selectUserType } from '../../auth/store/user.selectors';
import { SingleGroup } from '../group.interface';
import { options } from './options';

@Injectable({
  providedIn: 'root',
})
export class SingleGroupService {
  private store = useStore();
  private http = inject(HttpClient);
  private apiUrl = inject(API_URL);

  private group$$ = new ReplaySubject<SingleGroup>(1);

  get group$() {
    return this.group$$.asObservable();
  }

  private selectGroupOwnerId() {
    return this.group$.pipe(map(state => state.groupOwner.userId));
  }

  getGroupInfo(groupId: string) {
    this.http.get<SingleGroup>(this.apiUrl + `/group/${groupId}`).subscribe(result => {
      this.group$$.next(result);
    });
  }

  getGroupMenu() {
    return combineLatest([
      this.selectGroupOwnerId(),
      this.store.select(selectUserType),
      this.store.select(selectUserId),
    ]).pipe(
      map(([groupOwnerId, userType, userId]) => {
        if (groupOwnerId === userId) {
          return options.groupOwner;
        } else {
          return options[userType];
        }
      })
    );
  }
}
