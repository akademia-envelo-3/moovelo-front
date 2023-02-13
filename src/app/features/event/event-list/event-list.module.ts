import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventListComponent } from './event-list.component';
import { RouterModule } from '@angular/router';
import { EventCardComponent } from '../event-card/event-card.component';
import { CowLoaderComponent } from '@shared/loader/cow-loader.component';
import { MatButtonModule } from '@angular/material/button';
import { ErrorComponent } from '@shared/error.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { eventListReducer } from './store/event-list.reducer';
import { EffectsModule } from '@ngrx/effects';
import { EventListEffects } from './store/event-list.effects';
import { FilterSortComponent } from './filter-sort/filter-sort.component';

@NgModule({
  declarations: [EventListComponent, FilterSortComponent],
  imports: [
    ErrorComponent,
    CowLoaderComponent,
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: EventListComponent,
      },
    ]),
    StoreModule.forFeature('eventList', eventListReducer),
    EffectsModule.forFeature([EventListEffects]),
    EventCardComponent,
    CowLoaderComponent,
    MatButtonModule,
    MatTabsModule,
    MatCheckboxModule,
    ReactiveFormsModule,
  ],
  providers: [],
})
export default class EventListModule {}
