import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { searchBarReducer } from './search-bar/store/search-bar.reducer';
import { HomeComponent } from './home.component';
import { EffectsModule } from '@ngrx/effects';
import { SearchBarEffects } from './search-bar/store/search-bar.effects';
import { SearchBarService } from './search-bar/search-bar.service';
import { NavbarComponent } from 'src/app/features/home/user-navbar/navbar.component';

@NgModule({
  declarations: [SearchBarComponent, HomeComponent, NavbarComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
        children: [
          {
            path: 'create-event',
            loadChildren: () => import('../create-event/create-event.module'),
          },
        ],
      },
    ]),
    StoreModule.forFeature('searchBar', searchBarReducer),
    EffectsModule.forFeature([SearchBarEffects]),
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [SearchBarService],
})
export default class HomeModule {}
