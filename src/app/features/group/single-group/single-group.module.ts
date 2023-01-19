import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SingleGroupComponent } from './single-group.component';

@NgModule({
  declarations: [SingleGroupComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: SingleGroupComponent,
      },
    ]),
  ],
})
export default class SingleGroupModule {}
