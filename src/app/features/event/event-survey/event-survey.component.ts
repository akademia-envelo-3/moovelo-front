import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { CommonModule } from '@angular/common';
import { EventSurveyService } from './event-survey.service';
import { MatButtonModule } from '@angular/material/button';
import { EventSurveySingleComponent } from './event-survey-single/event-survey-single.component';

@Component({
  selector: 'app-event-survey',
  standalone: true,
  imports: [MatCheckboxModule, CommonModule, MatButtonModule, MatRadioModule, EventSurveySingleComponent],
  templateUrl: `./event-survey.component.html`,
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [EventSurveyService],
})
export class EventSurveyComponent {
  private surveyService = inject(EventSurveyService);

  eventSurveys$ = this.surveyService.getSurveys();
}
