import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ErrorComponent } from '@shared/error.component';
import { ErrorhandlerService } from '@shared/Interceptor/errorhandler.service';
import { CowLoaderComponent } from '@shared/loader/cow-loader.component';
import { Observable, switchMap, take } from 'rxjs';
import { AppState } from 'src/app/app.module';
import { GroupItemComponent } from '../group-list-item/group-list-item.component';
import { GroupListOwnedService } from './group-list-owned.service';

@Component({
  selector: 'app-group-list-owned',
  standalone: true,
  templateUrl: './group-list-owned.component.html',
  styleUrls: ['./group-list-owned.component.scss'],
  providers: [GroupListOwnedService],
  imports: [GroupItemComponent, CommonModule, ErrorComponent, CowLoaderComponent],
})
export default class GroupListOwnedComponent {
  private groupListOwnedService = inject(GroupListOwnedService);
  private errorService = inject(ErrorhandlerService);
  private store = inject<Store<AppState>>(Store);

  error$ = this.errorService.error$;
  userId$ = this.store.select(state => state.user);

  groupListOwned$ = this.userId$.pipe(
    take(1),
    switchMap(result => this.groupListOwnedService.getOwnedGroups(result.id))
  );
}
