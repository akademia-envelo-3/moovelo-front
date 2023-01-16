import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventTypeForm } from '../create-event.interface';
import { EventFormProvider } from '../event-form-provider';

@Component({
  selector: 'app-event-type-form',
  templateUrl: './event-type-form.component.html',
  styleUrls: ['./event-type-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventTypeFormComponent implements OnInit {
  private eventFormProvider = inject(EventFormProvider);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  constructor() {
    this.eventTypeForm = this.eventFormProvider.getForm().get('eventTypeForm') as FormGroup<EventTypeForm>;
  }

  eventTypeForm: FormGroup<EventTypeForm>;
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
      this.router.navigate(['../details'], { relativeTo: this.route });
    } else {
      this.page++;
    }
  }

  previousPage() {
    this.page--;
  }
}
