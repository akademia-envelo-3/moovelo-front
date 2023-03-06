import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CreateCategoryFormComponent } from './create-category-form/create-category-form.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CreateCategoryService } from './create-category-service';
import { Router } from '@angular/router';
import { CategoryData } from './create-category.interface';

@Component({
  selector: 'app-create-category',
  templateUrl: 'create-category.component.html',
  styleUrls: ['./create-category.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CreateCategoryFormComponent, MatSnackBarModule],
})
export default class CreateCategoryComponent {
  private snackBar = inject(MatSnackBar);
  private createCategoryService = inject(CreateCategoryService);
  private router = inject(Router);

  private milisecondsInSeconds = 1000;
  private numberOfSeconds = 5;

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: this.numberOfSeconds * this.milisecondsInSeconds,
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
