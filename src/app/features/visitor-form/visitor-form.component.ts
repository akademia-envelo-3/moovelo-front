import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NonNullableFormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  selector: 'app-visitor-form',
  templateUrl: './visitor-form.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VisitorFormComponent {
  joinForm = this.builder.group({
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

  get joinCtrl() {
    return this.joinForm.controls;
  }

  constructor(private builder: NonNullableFormBuilder) {}

  submitForm() {
    this.joinForm.markAllAsTouched();

    if (this.joinForm.invalid) {
      return;
    }
    console.log(this.joinForm.value);
  }
}
