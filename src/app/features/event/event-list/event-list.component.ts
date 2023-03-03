import { state } from '@angular/animations';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ErrorhandlerService } from '@shared/Interceptor/errorhandler.service';
import { AppState } from 'src/app/app.module';
import { EventListService } from './event-list.service';
import { EventListActions } from './store/event-list.actions';
import { selectEventList } from './store/event-list.selectors';

@Component({
  selector: 'app-event-list',
  templateUrl: `./event-list.component.html`,
  styleUrls: ['./event-list.component.scss'],
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventListComponent implements OnInit {
  private store = inject<Store<AppState>>(Store);
  private eventListService = inject(EventListService);
  private errorService = inject(ErrorhandlerService);

  eventListState$ = this.store.select(selectEventList);
  errorClientServer$ = this.errorService.error$;
  categories$ = this.eventListService.getCategories();
  userType$ = this.store.select(state => state.user.type);

  hasFilterChanged = false;

  ngOnInit() {
    this.store.dispatch(EventListActions.getEvents({ sort: 'sortOrder=desc', filter: [], category: null }));
  }
}
