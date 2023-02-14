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
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CowLoaderComponent } from '../../shared/loader/cow-loader.component';
import { ErrorComponent } from '../../shared/error.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [CreateEventComponent, EventTypeFormComponent, EventDetailsFormComponent, CategoryPropositionComponent],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
  imports: [
    CowLoaderComponent,
    ErrorComponent,
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
    MatChipsModule,
    MatAutocompleteModule,
    MatIconModule,
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
    CowLoaderComponent,
  ],
})
export default class CreateEventModule {}
