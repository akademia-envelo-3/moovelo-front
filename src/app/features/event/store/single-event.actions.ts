import { createActionGroup, props } from '@ngrx/store';
import { SingleEventStateInterface } from '../single-event.interface';
export const SingleEventActions = createActionGroup({
  source: 'single Event',
  events: {
    fetch_single_event: props<SingleEventStateInterface>(),
  },
});
