import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GroupListComponent } from './group-list.component';
import { GroupItemComponent } from '../group-list-item/group-list-item.component';
import { MatButtonModule } from '@angular/material/button';
import { CowLoaderComponent } from '@shared/loader/cow-loader.component';

@NgModule({
  declarations: [GroupListComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: GroupListComponent,
      },
    ]),
    GroupItemComponent,
    CommonModule,
    MatButtonModule,
    CowLoaderComponent,
  ],
  providers: [],
})
export default class GroupListModule {}
