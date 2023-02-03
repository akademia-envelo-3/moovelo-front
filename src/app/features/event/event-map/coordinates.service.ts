import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.module';

@Injectable({
  providedIn: 'root',
})
export class CoordinatesService {
  private store = inject<Store<AppState>>(Store);

  coorinates$ = this.store.select(store => store.singleEvent.eventInfo);

  get getCoordinates() {
    return this.coorinates$;
  }

  //   get getLatitude() {
  //     return this.latitude;
  //   }
}
