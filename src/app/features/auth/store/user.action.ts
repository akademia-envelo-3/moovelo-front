import { createActionGroup, props } from '@ngrx/store';
import { Role } from './user.interface';

export const userActions = createActionGroup({
  source: 'User',
  events: {
    'Change role': props<{ role: Role; id: number }>(),
  },
});
