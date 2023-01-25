import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-event-survey',
  standalone: true,
  imports: [MatFormFieldModule, MatCheckboxModule],
  templateUrl: `./event-survey.component.html`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventSurveyComponent {}
