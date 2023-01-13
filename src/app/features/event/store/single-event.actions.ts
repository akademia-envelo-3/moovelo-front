import { createActionGroup, props } from '@ngrx/store';
export const SingleEventActions = createActionGroup({
  source: 'single Event',
  events: {
    fetch_single_event: props<{
      eventId: string;
    }>(),
  },
});
