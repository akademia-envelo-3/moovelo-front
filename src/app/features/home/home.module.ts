import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { SearchBarComponent } from '@shared/search-bar/search-bar.component';
import { searchBarReducer } from '@shared/search-bar/store/search-bar.reducer';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [SearchBarComponent, HomeComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
        children: [],
      },
    ]),
    StoreModule.forFeature('searchBar', searchBarReducer),
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    CommonModule,
  ],
})
export default class HomeModule {}
