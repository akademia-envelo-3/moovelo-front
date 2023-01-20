import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventTypeForm } from '../create-event.interface';
import { CreateEventService } from '../create-event.service';

@Component({
  selector: 'app-event-type-form',
  templateUrl: './event-type-form.component.html',
  styleUrls: ['./event-type-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventTypeFormComponent implements OnInit {
  private eventFormProvider = inject(CreateEventService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  eventTypeForm: FormGroup<EventTypeForm> = this.eventFormProvider.getForm().controls.eventTypeForm;
  page = 0;
  questions = [
    'Czy twoje wydarzenie jest tylko dla osób zaproszonych?',
    'Czy twoje wydarzenie jest tylko dla osób z wybranej grupy?',
    'Czy twoje wydarzenie ma być tylko dla osób z firmy?',
  ];

  ngOnInit() {
    this.eventTypeForm.reset();
  }

  private get isPrivate() {
    return this.eventTypeForm.value.isPrivate;
  }

  private get isGroup() {
    return this.eventTypeForm.value.isGroup;
  }

  private get isInternal() {
    return this.eventTypeForm.value.isInternal;
  }

  nextPage() {
    if (this.isPrivate || this.isGroup || this.isInternal || this.page >= 2) {
      if (!this.isPrivate && !this.isGroup && !this.isInternal) {
        this.eventTypeForm.controls.isExternal.setValue(true);
      }
      this.router.navigate(['../details'], { relativeTo: this.route });
    } else {
      this.page++;
    }
  }

  previousPage() {
    this.eventTypeForm.reset();
    this.page--;
  }
}
