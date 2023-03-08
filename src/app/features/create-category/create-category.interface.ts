import { FormControl } from '@angular/forms';

export interface AddCategory {
  name: FormControl<string>;
}

export interface CategoryData {
  name: string;
}
