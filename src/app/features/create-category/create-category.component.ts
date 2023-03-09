import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CreateCategoryFormComponent } from './create-category-form/create-category-form.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Router } from '@angular/router';
import { CategoryData } from './create-category.interface';
import { CreateCategoryService } from './create-category-service';

@Component({
  selector: 'app-create-category',
  templateUrl: 'create-category.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CreateCategoryFormComponent, MatSnackBarModule],
})
export default class CreateCategoryComponent {
  private snackBar = inject(MatSnackBar);
  private createCategoryService = inject(CreateCategoryService);
  private router = inject(Router);

  private MILISECONDS_IN_SECOND = 1000;
  private NUMBER_OF_SECONDS = 5;

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: this.NUMBER_OF_SECONDS * this.MILISECONDS_IN_SECOND,
      panelClass: 'white-snackbar',
    });
  }

  addCategory(category: CategoryData) {
    const categoryDTO = {
      name: category.name,
      isVisible: true,
    };
    this.createCategoryService.postNewCategory(categoryDTO).subscribe({
      next: () => {
        this.router.navigate(['/categories']);
        this.openSnackBar('Dodano nową kategorię', 'X');
      },
    });
  }
}
