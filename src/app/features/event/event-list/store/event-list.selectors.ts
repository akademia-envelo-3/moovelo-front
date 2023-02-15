import { AppState } from 'src/app/app.module';

export const selectEventList = (state: AppState) => state.eventList;
