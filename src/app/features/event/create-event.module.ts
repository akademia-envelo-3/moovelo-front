import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { EventTypeFormComponent } from './components/event-type-form/event-type-form.component';
import { EventDetailsFormComponent } from './components/event-details-form/event-details-form.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [CreateEventComponent, EventTypeFormComponent, EventDetailsFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatButtonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CreateEventComponent,
        children: [
          {
            path: 'event-type',
            component: EventTypeFormComponent,
          },
          {
            path: 'event-details',
            component: EventDetailsFormComponent,
          },
        ],
      },
      {
        path: '**',
        redirectTo: '',
      },
    ]),
  ],
})
export default class CreateEventModule {}
