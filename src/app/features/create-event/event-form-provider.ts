import { FormGroup } from '@angular/forms';

export abstract class EventFormProvider<T extends Record<any, any>> {
  abstract getForm(): FormGroup<T>;
}
