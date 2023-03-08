import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { CreateCategoryFormComponent } from '../../create-category/create-category-form/create-category-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgIf } from '@angular/common';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { pattern } from '@shared/patterns/patterns';
import { trimValidator } from '@shared/validators/space-trim.validator';
import { MatDialogModule } from '@angular/material/dialog';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddCategory } from '../../create-category/create-category.interface';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    CreateCategoryFormComponent,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    NgIf,
  ],
})
export default class CategoryEditComponent implements OnInit {
  private builder = inject(NonNullableFormBuilder);
  private dialogRef = inject(MatDialogRef);
  private data = inject(MAT_DIALOG_DATA);

  editCategory = this.createForm();

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
    return this.editCategory.controls.name;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.editCategory.controls.name.setValue(this.data.name);
  }
}
