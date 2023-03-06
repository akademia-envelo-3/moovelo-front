import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CreateCategoryFormComponent } from '../../create-category/create-category-form/create-category-form.component';
import { CategoryData } from '../../create-category/create-category.interface';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CreateCategoryFormComponent],
})
export default class CategoryEditComponent {
  addCategory(category: CategoryData) {
    console.log(category);
  }
}
