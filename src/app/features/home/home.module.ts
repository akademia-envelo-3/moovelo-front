import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { HomeComponent } from './home.component';
import { SearchBarService } from './search-bar/search-bar.service';
import { NavbarComponent } from 'src/app/features/home/user-navbar/navbar.component';
import { AuthGuard } from '../auth';

@NgModule({
  declarations: [SearchBarComponent, HomeComponent, NavbarComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: 'groups',
            loadChildren: () => import('../group/group-list/group-list.module'),
          },
          {
            path: 'create-event',
            loadChildren: () => import('../create-event/create-event.module'),
          },
        ],
      },
    ]),
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
