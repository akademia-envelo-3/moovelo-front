import { AsyncPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ErrorComponent } from '@shared/error.component';
import { ErrorhandlerService } from '@shared/Interceptor/errorhandler.service';
import { CowLoaderComponent } from '@shared/loader/cow-loader.component';
import CategoryListItemComponent from '../category-list-item/category-list-item.component';
import { CategoryListApiService } from './category-list.service';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { CategoryItemResponse } from '../category.interface';

@Component({
  selector: 'app-category-list',
  templateUrl: 'category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CategoryListItemComponent,
    MatButtonModule,
    CowLoaderComponent,
    ErrorComponent,
    NgIf,
    AsyncPipe,
    NgFor,
    NgClass,
    RouterLink,
  ],
})
export default class CategoryListComponent {
  private categoryService = inject(CategoryListApiService);
  private errorService = inject(ErrorhandlerService);

  categoryList$ = this.categoryService.getCategories();
  errorHandler$ = this.errorService.error$;

  editCategoryName(newCategoryName: CategoryItemResponse) {
    this.categoryService.patchCategoryName(newCategoryName.id, newCategoryName.name).subscribe(console.log);
  }
}
