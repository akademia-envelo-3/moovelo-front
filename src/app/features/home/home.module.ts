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
            path: 'events/1',
            loadChildren: () => import('../event/single-event/single-event.module'),
          },
        ],
      },
    ]),
  ],
})
export default class HomeModule {}
