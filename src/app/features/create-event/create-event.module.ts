import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CreateEventComponent } from './create-event/create-event.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { EventTypeFormComponent } from './event-type-form/event-type-form.component';
import { EventDetailsFormComponent } from './event-details-form/event-details-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { CreateEventFormService } from './create-event-form.service';
import { detailsGuard } from './guards/details.guard';
import { MatSelectModule } from '@angular/material/select';
import { CategoryPropositionComponent } from './category-proposition/category-proposition.component';
import { CategoryPropositionService } from './category-proposition/category-proposition.service';
import { ErrorComponent } from '@shared/error.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackbarComponent } from '@shared/snackbar/snackbar.component';

@NgModule({
  declarations: [CreateEventComponent, EventTypeFormComponent, EventDetailsFormComponent, CategoryPropositionComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ErrorComponent,
    MatSnackBarModule,
    SnackbarComponent,
    RouterModule.forChild([
      {
        path: '',
        component: CreateEventComponent,
        providers: [CreateEventFormService, CategoryPropositionService],
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
            canActivate: [detailsGuard],
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
