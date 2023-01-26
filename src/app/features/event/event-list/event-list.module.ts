import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventListComponent } from './event-list.component';
import { RouterModule } from '@angular/router';
import { EventCardComponent } from '../event-card/event-card.component';
import { CowLoaderComponent } from '@shared/loader/cow-loader.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [EventListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: EventListComponent,
      },
    ]),
    EventCardComponent,
    CowLoaderComponent,
    MatButtonModule,
  ],
  providers: [],
})
export default class EventListModule {}
