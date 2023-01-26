import { ChangeDetectionStrategy, Component, Input, inject, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { EventSurvey } from '../event.interfaces';
import { CommonModule } from '@angular/common';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { EventSurveyService } from './event-survey.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-event-survey',
  standalone: true,
  imports: [MatFormFieldModule, MatCheckboxModule, CommonModule, ReactiveFormsModule, MatButtonModule, MatRadioModule],
  templateUrl: `./event-survey.component.html`,
  styleUrls: ['./event-survey.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventSurveyComponent {
  private builder = inject(NonNullableFormBuilder);
  private surveyService = inject(EventSurveyService);

  surveyForm = this.builder.group({});

  addAnswers(arr: EventSurvey['answers']) {
    arr.forEach(answer => {
      this.surveyForm.addControl(answer.value, this.builder.control(''));
    });
  }

  submitAnswer() {
    this.surveyForm.markAllAsTouched();

    console.log;
  }
  @Input() eventSurveys!: EventSurvey[];
  eventSurvey!: EventSurvey;
  answers = this.addAnswers(this.eventSurvey.answers);
}
