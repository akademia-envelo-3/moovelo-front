import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { EventSurvey } from '../event.interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-survey',
  standalone: true,
  imports: [MatFormFieldModule, MatCheckboxModule, CommonModule],
  templateUrl: `./event-survey.component.html`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventSurveyComponent {
  @Input() eventSurvey!: EventSurvey;
}
