import { ChangeDetectionStrategy, Component, EventEmitter, inject, Output } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ErrorComponent } from '@shared/error.component';
import { ErrorhandlerService } from '@shared/Interceptor/errorhandler.service';
import { AddCategory, CategoryData } from '../create-category.interface';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { pattern } from '@shared/patterns/patterns';
import { AsyncPipe, NgIf } from '@angular/common';
import { trimValidator } from '@shared/validators/space-trim.validator';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-category-form',
  templateUrl: './create-category-form.component.html',
  styleUrls: ['./create-category-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ReactiveFormsModule, ErrorComponent, MatInputModule, MatFormFieldModule, NgIf, AsyncPipe, RouterLink],
})
export class CreateCategoryFormComponent {
  @Output() handleSubmitEmit = new EventEmitter<CategoryData>();

  private builder = inject(NonNullableFormBuilder);
  private errorService = inject(ErrorhandlerService);

  error$ = this.errorService.error$;

  addCategory = this.createForm();

  private createForm() {
    return this.builder.group<AddCategory>({
      name: this.builder.control('', {
        validators: [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(29),
          Validators.pattern(pattern.lettersNumbersDashesAndPolishLettersRegex),
          trimValidator,
        ],
      }),
    });
  }

  get nameCtrl() {
    return this.addCategory.controls.name;
  }

  submitForm() {
    this.addCategory.markAllAsTouched();
    if (this.addCategory.invalid) return;

    this.handleSubmitEmit.emit(this.addCategory.getRawValue());
  }
}
