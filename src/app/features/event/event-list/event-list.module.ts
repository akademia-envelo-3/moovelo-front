import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventListComponent } from './event-list.component';
import { RouterModule } from '@angular/router';
import { EventCardComponent } from '../event-card/event-card.component';
import { CowLoaderComponent } from '@shared/loader/cow-loader.component';
import { MatButtonModule } from '@angular/material/button';
import { ErrorComponent } from '@shared/error.component';
import { EventCardNewComponent } from '../event-card-new/event-card-new.component';

@NgModule({
  declarations: [EventListComponent],
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
    EventCardComponent,
    CowLoaderComponent,
    MatButtonModule,
    EventCardNewComponent,
  ],
  providers: [],
})
export default class EventListModule {}
