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
    MatTabsModule,
    MatCheckboxModule,
    ReactiveFormsModule,
  ],
  providers: [],
})
export default class EventListModule {}
