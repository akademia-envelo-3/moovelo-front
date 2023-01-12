import { FormGroup } from '@angular/forms';

export abstract class EventFormProvider {
  abstract getForm(): FormGroup;
}
