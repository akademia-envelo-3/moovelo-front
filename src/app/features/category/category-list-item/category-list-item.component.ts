import { ChangeDetectionStrategy, Component, inject, Input, OnInit } from '@angular/core';
import { CategoryItemResponse } from '../category.interface';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleChange, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgIf, TitleCasePipe } from '@angular/common';
import { CategoryListService } from '../category-list/category-list.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

@Component({
  selector: './app-category-list-item[categoryItem]',
  templateUrl: './category-list-item.component.html',
  styleUrls: ['./category-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButtonModule, MatSlideToggleModule, NgIf, TitleCasePipe, ReactiveFormsModule],
  standalone: true,
})
export default class CategoryListItemComponent implements OnInit {
  @Input() categoryItem!: CategoryItemResponse;

  private catgoryService = inject(CategoryListService);

  toggleCtrl = new FormControl(false, { nonNullable: true });

  ngOnInit() {
    this.toggleCtrl.setValue(this.categoryItem.isVisible);
    this.toggleCtrl.valueChanges
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap(visible => this.catgoryService.patchCategoryVisibility(this.categoryItem.id, visible))
      )
      .subscribe(console.log);
  }
}
