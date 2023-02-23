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
import { ErrorComponent } from '@shared/error.component';
import { AuthGuard } from '../auth/guards/auth.guard';
import { FooterComponent } from '@shared/footer/footer.component';
import { IsNotAdminGuard } from '../auth/guards/is-not-admin.guard';

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
            path: '',
            loadChildren: () => import('../event/event-list/event-list.module'),
          },
          {
            path: 'events/:id',
            loadChildren: () => import('../event/single-event/single-event.module'),
          },
          {
            path: 'owned-groups',
            loadComponent: () => import('../group/group-list-owned/group-list-owned.component'),
          },
          {
            path: 'groups',
            loadChildren: () => import('../group/group-list/group-list.module'),
          },
          {
            path: 'create-event',
            loadChildren: () => import('../create-event/create-event.module'),
            canActivate: [IsNotAdminGuard],
          },
          {
            path: 'create-group',
            loadChildren: () => import('../create-group/create-group.module'),
            canActivate: [IsNotAdminGuard],
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
    ErrorComponent,
    FooterComponent,
  ],
  providers: [SearchBarService],
})
export default class HomeModule {}
