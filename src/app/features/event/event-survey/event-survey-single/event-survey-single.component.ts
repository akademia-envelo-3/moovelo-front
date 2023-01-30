import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { EventSurvey } from '../../event.interfaces';
import { CommonModule } from '@angular/common';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-event-survey-single',
  standalone: true,
  imports: [MatFormFieldModule, MatCheckboxModule, CommonModule, ReactiveFormsModule, MatButtonModule, MatRadioModule],
  templateUrl: 'event-survey-single.component.html',
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventSurveySingleComponent {
  private builder = inject(NonNullableFormBuilder);

  surveyForm = this.builder.group({
    answer: this.builder.control('', {
      validators: [Validators.required],
    }),
  });

  // addAnswers(arr: EventSurvey['answers']) {
  //   arr.forEach(answer => {
  //     this.surveyForm.addControl(answer.value, this.builder.control(''));
  //   });
  // }

  submitAnswer() {
    this.surveyForm.markAllAsTouched();

    console.log(this.surveyForm.value);
  }

  @Input()
  survey!: EventSurvey;
}
