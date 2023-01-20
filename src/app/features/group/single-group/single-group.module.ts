import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SingleGroupComponent } from './single-group.component';
import { MatButtonModule } from '@angular/material/button';
import { EventCardComponent } from '../../event';

@NgModule({
  declarations: [SingleGroupComponent],
  imports: [
    RouterModule.forChild([
      {
        path: ':id',
        component: SingleGroupComponent,
      },
    ]),
    CommonModule,
    MatButtonModule,
    EventCardComponent,
  ],
})
export default class SingleGroupModule {}
