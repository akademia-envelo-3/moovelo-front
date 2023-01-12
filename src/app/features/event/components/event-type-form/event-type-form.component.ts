import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EventFormProvider } from '../../event-form-provider';
import { EventTypeForm } from '../create-event/create-event.component';

@Component({
  selector: 'app-event-type-form',
  templateUrl: './event-type-form.component.html',
  styleUrls: ['./event-type-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventTypeFormComponent {
  private eventFormProvider = inject(EventFormProvider);

  page = 0;
  questions = [
    'Czy twoje wydarzenie jest tylko dla osób zaproszonych?',
    'Czy twoje wydarzenie jest tylko dla osób z wybranej grupy?',
    'Czy twoje wydarzenie ma być tylko dla osób z firmy?',
  ];

  constructor() {
    this.eventTypeForm = this.eventFormProvider.getForm().get('eventTypeForm') as FormGroup<EventTypeForm>;
  }

  eventTypeForm: FormGroup<EventTypeForm>;

  get isPrivate() {
    return this.eventTypeForm.value.isPrivate;
  }

  get isGroup() {
    return this.eventTypeForm.value.isGroup;
  }

  get isExternal() {
    return this.eventTypeForm.value.isExternal;
  }

  nextPage() {
    if (this.isPrivate || this.isGroup || this.isExternal || this.page >= 2) {
      console.log('navigate next');
    } else {
      this.page++;
    }
  }

  previousPage() {
    this.page--;
  }
}
