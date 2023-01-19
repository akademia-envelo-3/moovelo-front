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
            path: 'groups/1',
            loadChildren: () => import('../group/single-group/single-group.module'),
          },
        ],
      },
    ]),
  ],
})
export default class HomeModule {}
