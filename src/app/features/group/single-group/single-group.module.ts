import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SingleGroupComponent } from './single-group.component';

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
  ],
})
export default class SingleGroupModule {}
