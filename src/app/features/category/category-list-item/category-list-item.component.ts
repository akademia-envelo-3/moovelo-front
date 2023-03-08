import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { CategoryItemResponse } from '../category.interface';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgIf, TitleCasePipe } from '@angular/common';
import { CategoryListApiService } from '../category-list/category-list.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import CategoryEditComponent from '../category-edit/category-edit.component';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: './app-category-list-item[categoryItem]',
  templateUrl: './category-list-item.component.html',
  styleUrls: ['./category-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButtonModule, MatSlideToggleModule, NgIf, TitleCasePipe, ReactiveFormsModule, MatDialogModule],
  standalone: true,
})
export default class CategoryListItemComponent implements OnInit {
  @Input() categoryItem!: CategoryItemResponse;
  @Output() editCategoryName = new EventEmitter<CategoryItemResponse>();

  private categoryService = inject(CategoryListApiService);
  private dialog = inject(MatDialog);

  toggleCtrl = new FormControl(false, { nonNullable: true });

  openDialog(): void {
    const dialogRef = this.dialog.open(CategoryEditComponent, {
      position: { top: '110px' },
      data: { name: this.categoryItem.name },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) return;
      if (result === this.categoryItem.name) return;
      this.editCategoryName.emit({ id: this.categoryItem.id, name: result, isVisible: this.categoryItem.isVisible });
    });
  }

  ngOnInit() {
    this.toggleCtrl.setValue(this.categoryItem.isVisible);
    this.toggleCtrl.valueChanges
      .pipe(
        untilDestroyed(this),
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap(visible => this.categoryService.patchCategoryVisibility(this.categoryItem.id, visible))
      )
      .subscribe();
  }
}
