import { ChangeDetectionStrategy, Component, EventEmitter, inject, Output } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorhandlerService } from '@shared/Interceptor/errorhandler.service';
import { pattern } from '@shared/patterns/patterns';
import { SnackbarComponent } from '@shared/snackbar/snackbar.component';
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

  error$ = this.errorService.error$;
  snackBarDuration = 5;

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
      validators: [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(255),
        Validators.pattern(pattern.lettersNumbersDashesAndPolishLettersRegex),
      ],
    }),
  });

  get proposeCategoryCtrl() {
    return this.proposeCategoryForm.controls;
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      panelClass: ['white-snackbar'],
    });
  }

  submitForm() {
    this.proposeCategoryForm.markAllAsTouched();

    if (this.proposeCategoryForm.invalid) {
      return;
    }

    this.categoryPropositionService.postCategoryProposition(this.proposeCategoryForm.getRawValue()).subscribe(() => {
      this.openSnackBar('Wysłano propozycję nowej grupy', 'X');
      this.hideForm.emit();
    });
  }
}
