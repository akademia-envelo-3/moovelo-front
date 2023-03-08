import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ErrorComponent } from '@shared/error.component';
import { useStore } from '@shared/inject-hooks/user-store';
import { ErrorhandlerService } from '@shared/Interceptor/errorhandler.service';
import { CowLoaderComponent } from '@shared/loader/cow-loader.component';
import { switchMap, take, tap } from 'rxjs';
import { EventCardComponent } from '../event-card/event-card.component';
import { EventListOwnedService } from './event-list-owned.service';

@Component({
  selector: 'app-event-list-owned',
  standalone: true,
  templateUrl: 'event-list-owned.component.html',
  styleUrls: ['./event-list-owned.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [EventCardComponent, CommonModule, ErrorComponent, CowLoaderComponent],
  providers: [EventListOwnedService],
})
export default class EventListOwnedComponent {
  private eventListOwnedService = inject(EventListOwnedService);
  private errorService = inject(ErrorhandlerService);

  store = useStore();
  error$ = this.errorService.error$;
  userId$ = this.store.select(state => state.user);

  eventListOwned$ = this.userId$.pipe(
    take(1),
    switchMap(result => this.eventListOwnedService.getOwnedEvents(result.id))
  );
}
