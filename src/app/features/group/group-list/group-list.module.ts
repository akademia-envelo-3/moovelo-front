import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GroupListComponent } from './group-list.component';
import { GroupItemComponent } from '../group-list-item/group-list-item.component';
import { MatButtonModule } from '@angular/material/button';
import { CowLoaderComponent } from '@shared/loader/cow-loader.component';
import { ErrorComponent } from '@shared/error.component';

@NgModule({
  declarations: [GroupListComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: GroupListComponent,
      },
      {
        path: ':id',
        loadComponent: () => import('../single-group/single-group.component'),
      },
      {
        path: ':id/users',
        loadComponent: () => import('../single-group/group-participants/group-participants.component'),
      },
    ]),
    GroupItemComponent,
    CommonModule,
    MatButtonModule,
    CowLoaderComponent,
    ErrorComponent,
  ],
  providers: [],
})
export default class GroupListModule {}
