import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-visitor-form',
  templateUrl: './visitor-form.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VisitorFormComponent {
  reservationForm = this.builder.group({
    firstName: this.builder.control('', {
      validators: Validators.required,
    }),
    surname: this.builder.control('', {
      validators: Validators.required,
    }),
    email: this.builder.control('', {
      validators: [Validators.required, Validators.email],
    }),
  });

  get reservationCtrl() {
    return this.reservationForm;
  }

  constructor(private builder: NonNullableFormBuilder) {}

  submitForm() {
    this.reservationForm.markAllAsTouched();

    if (this.reservationForm.invalid) {
      return;
    }
    console.log(this.reservationForm.value);
  }
}
