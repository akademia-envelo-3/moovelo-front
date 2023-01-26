import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { EventSurvey } from '../event.interfaces';
import { CommonModule } from '@angular/common';
import { NonNullableFormBuilder } from '@angular/forms';
import { EventSurveyService } from './event-survey.service';

@Component({
  selector: 'app-event-survey',
  standalone: true,
  imports: [MatFormFieldModule, MatCheckboxModule, CommonModule],
  templateUrl: `./event-survey.component.html`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventSurveyComponent {
  private builder = inject(NonNullableFormBuilder);
  private service = inject(EventSurveyService);

  answers$ = this.service.getSurveys();

  surveyForm = this.builder.group({});

  @Input() eventSurvey!: EventSurvey;
}
