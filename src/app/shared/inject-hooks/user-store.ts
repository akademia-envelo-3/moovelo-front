import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.module';

export function useStore() {
  return inject<Store<AppState>>(Store);
}
