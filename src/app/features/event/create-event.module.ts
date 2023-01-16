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
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';

@NgModule({
  declarations: [CreateEventComponent, EventTypeFormComponent, EventDetailsFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
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
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
})
export default class CreateEventModule {}
