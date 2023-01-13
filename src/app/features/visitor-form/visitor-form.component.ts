import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NonNullableFormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { emailValidatorRegex } from './emailValidatorPattern';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatButtonModule],
  selector: 'app-visitor-form',
  templateUrl: './visitor-form.component.html',
  styleUrls: ['./visitor-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VisitorFormComponent {
  joinForm = this.builder.group({
    firstName: this.builder.control('', {
      validators: [Validators.required, Validators.maxLength(20)],
    }),
    lastName: this.builder.control('', {
      validators: [Validators.required, Validators.maxLength(20)],
    }),
    email: this.builder.control('', {
      validators: [Validators.required, Validators.maxLength(30), Validators.pattern(emailValidatorRegex)],
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
  }
}
