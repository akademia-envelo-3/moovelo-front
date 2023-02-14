import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CreateGroupComponent } from './create-group/create-group.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ErrorComponent } from '@shared/error.component';
import { CreateGroupService } from './create-group.service';

@NgModule({
  declarations: [CreateGroupComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: CreateGroupComponent,
      },
    ]),
    ReactiveFormsModule,
    MatInputModule,
    CommonModule,
    MatButtonModule,
    ErrorComponent,
  ],
  providers: [CreateGroupService],
})
export default class CreateGroupModule {}
