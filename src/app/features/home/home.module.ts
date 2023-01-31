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
import { AuthGuard } from '../auth/guards/auth.guard';
import { FooterComponent } from '@shared/footer/footer.component';

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
            path: 'events/1',
            loadChildren: () => import('../event/single-event/single-event.module'),
          },
          {
            path: 'events',
            loadChildren: () => import('../event/event-list/event-list.module'),
          },
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
    FooterComponent,
  ],
  providers: [SearchBarService],
})
export default class HomeModule {}
