import { ChangeDetectionStrategy, Component, inject, OnDestroy } from '@angular/core';
import { CreateEventFormService } from '../create-event-form.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [],
})
export class CreateEventComponent implements OnDestroy {
  private createEventFormService = inject(CreateEventFormService);

  ngOnDestroy() {
    this.createEventFormService.getForm().reset();
  }
}
