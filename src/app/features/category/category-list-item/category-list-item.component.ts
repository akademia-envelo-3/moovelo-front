import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, Input, OnInit } from '@angular/core';
import { CategoryItemResponse } from '../category.interface';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgIf, TitleCasePipe } from '@angular/common';
import { CategoryListService } from '../category-list/category-list.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import CategoryEditComponent from '../category-edit/category-edit.component';

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

  private categoryService = inject(CategoryListService);
  private cdr = inject(ChangeDetectorRef);
  private dialog = inject(MatDialog);

  toggleCtrl = new FormControl(false, { nonNullable: true });

  openDialog(): void {
    const dialogRef = this.dialog.open(CategoryEditComponent, {
      position: { top: '110px' },
      data: { name: this.categoryItem.name },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) return;
      this.categoryService.patchCategoryName(this.categoryItem.id, result).subscribe({
        next: () => {
          this.categoryItem.name = result;
          this.cdr.detectChanges();
        },
      });
    });
  }

  ngOnInit() {
    this.toggleCtrl.setValue(this.categoryItem.isVisible);
    this.toggleCtrl.valueChanges
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap(visible => this.categoryService.patchCategoryVisibility(this.categoryItem.id, visible))
      )
      .subscribe();
  }
}
