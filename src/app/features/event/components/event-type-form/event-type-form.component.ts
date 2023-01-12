import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { EventFormProvider } from '../../event-form-provider';

@Component({
  selector: 'app-event-type-form',
  templateUrl: './event-type-form.component.html',
  styleUrls: ['./event-type-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventTypeFormComponent {
  private eventFormProvider = inject(EventFormProvider);

  ngOnInit() {
    console.log('asd');
    console.log(this.eventFormProvider.getForm());
  }
}
