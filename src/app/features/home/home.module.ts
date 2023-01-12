import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
        children: [
          {
            path: 'groups',
            loadChildren: () => import('../group/group-list/group-list.module'),
          },
        ],
      },
    ]),
  ],
})
export default class HomeModule {}
