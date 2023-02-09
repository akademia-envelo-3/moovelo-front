import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { EventSurvey } from '../../event.interfaces';
import { CommonModule } from '@angular/common';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { EventSurveyService } from '../event-survey.service';

@Component({
  selector: 'app-event-survey-single[survey]',
  standalone: true,
  imports: [MatFormFieldModule, MatCheckboxModule, CommonModule, ReactiveFormsModule, MatButtonModule, MatRadioModule],
  templateUrl: 'event-survey-single.component.html',
  styleUrls: ['event-survey-single.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventSurveySingleComponent {
  @Input()
  survey!: EventSurvey;

  private builder = inject(NonNullableFormBuilder);
  private surveyService = inject(EventSurveyService);
  surveyForm = this.builder.group({
    answer: this.builder.control('', {
      validators: [Validators.required],
    }),
  });

  get getSurveyForm() {
    return this.surveyForm.controls.answer;
  }

  submitAnswer() {
    this.surveyForm.markAllAsTouched();
    const answer = Object.values(this.getSurveyForm.value);
    this.surveyService.sendAnswerId(Number(answer[0]), this.survey.id);
    if (this.surveyForm.invalid) {
      return;
    }
  }
}
