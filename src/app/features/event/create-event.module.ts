import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CreateEventComponent } from './components/create-event/create-event.component';

@NgModule({
  declarations: [CreateEventComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CreateEventComponent,
      },
      {
        path: '**',
        redirectTo: '',
      },
    ]),
  ],
})
export default class CreateEventModule {}
