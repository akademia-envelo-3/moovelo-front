import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NonNullableFormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { emailValidatorRegex } from './emailValidatorPattern';

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

  joinForm = this.builder.group({
    name: this.builder.control('', {
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

  submitForm() {
    this.joinForm.markAllAsTouched();

    if (this.joinForm.invalid) {
      return;
    } else {
      console.log(this.joinForm.value);
    }
  }
}
