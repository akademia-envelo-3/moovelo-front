import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NonNullableFormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { pattern } from '@shared/patterns/patterns';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  selector: 'app-visitor-form',
  templateUrl: './visitor-form.component.html',
  styleUrls: ['./visitor-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VisitorFormComponent {
  private builder = inject(NonNullableFormBuilder);

  joinEventForm = this.builder.group({
    name: this.builder.control('', {
      validators: [Validators.required, Validators.maxLength(30), Validators.min(2)],
    }),
    lastName: this.builder.control('', {
      validators: [Validators.required, Validators.maxLength(50), Validators.min(2)],
    }),
    email: this.builder.control('', {
      validators: [Validators.required, Validators.maxLength(50), Validators.pattern(pattern.emailValidatorRegex)],
    }),
  });

  get joinEventCtrl() {
    return this.joinEventForm.controls;
  }

  submitForm() {
    this.joinEventForm.markAllAsTouched();

    if (this.joinEventForm.invalid) {
      return;
    }
  }
}
