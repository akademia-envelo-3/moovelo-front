import { ChangeDetectionStrategy, Component, EventEmitter, inject, Output } from '@angular/core';
import { FormGroup, FormGroupDirective, NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorhandlerService } from '@shared/Interceptor/errorhandler.service';
import { pattern } from '@shared/patterns/patterns';
import { CategoryPropositionService } from './category-proposition.service';

@Component({
  selector: 'app-category-proposition',
  templateUrl: './category-proposition.component.html',
  styleUrls: ['./category-proposition.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryPropositionComponent {
  @Output() hideForm = new EventEmitter();

  private builder = inject(NonNullableFormBuilder);
  private errorService = inject(ErrorhandlerService);
  private categoryPropositionService = inject(CategoryPropositionService);
  private snackBar = inject(MatSnackBar);

  private snackBarDuration = 5;
  error$ = this.errorService.error$;

  private openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: this.snackBarDuration * 1000,
      panelClass: 'white-snackbar',
    });
  }

  private clearForm(form: FormGroup, formGroupDirective: FormGroupDirective) {
    form.reset();
    formGroupDirective.resetForm();
  }

  get nameCtrl() {
    return this.proposeCategoryForm.controls.name;
  }

  get descriptionCtrl() {
    return this.proposeCategoryForm.controls.description;
  }

  proposeCategoryForm = this.builder.group({
    name: this.builder.control('', {
      validators: [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(29),
        Validators.pattern(pattern.lettersNumbersDashesAndPolishLettersRegex),
      ],
    }),
    description: this.builder.control('', {
      validators: [Validators.required, Validators.minLength(4), Validators.maxLength(255)],
    }),
  });

  submitForm(form: FormGroup, formGroupDirective: FormGroupDirective) {
    this.proposeCategoryForm.markAllAsTouched();

    if (this.proposeCategoryForm.invalid) {
      return;
    }

    this.categoryPropositionService.postCategoryProposition(this.proposeCategoryForm.getRawValue()).subscribe(() => {
      this.clearForm(form, formGroupDirective);
      this.openSnackBar('Wysłano propozycję nowej kategorii', 'X');
      this.hideForm.emit();
    });
  }
}
