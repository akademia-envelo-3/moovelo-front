import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/app.module';
import { UserState } from './user.interface';

export const selectUser = (state: AppState) => state.user;

export const selectUserType = createSelector(selectUser, (state: UserState) => state.type);

export const selectUserId = createSelector(selectUser, (state: UserState) => state.id);
