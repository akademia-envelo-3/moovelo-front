import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { EventCard } from '../../event.interfaces';
import { GetEventPayload } from '../event-list.interface';

export const EventListActions = createActionGroup({
  source: 'Event list',
  events: {
    'get events': props<GetEventPayload>(),
    'show filters': emptyProps(),
    'toggle filters': emptyProps(),
  },
});

export const EventListApiActions = createActionGroup({
  source: 'Event list API',
  events: {
    'get events success': props<{ events: EventCard[] }>(),
  },
});
