import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
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
    MatInputModule,
    RouterModule.forChild([
      {
        path: '',
        component: CreateEventComponent,
        children: [
          {
            path: '',
            redirectTo: 'type',
            pathMatch: 'full',
          },
          {
            path: 'type',
            component: EventTypeFormComponent,
          },
          {
            path: 'details',
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
