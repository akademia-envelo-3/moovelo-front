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
            path: 'create-event',
            loadChildren: () => import('../create-event/create-event.module'),
          },
        ],
      },
    ]),
  ],
})
export default class HomeModule {}
