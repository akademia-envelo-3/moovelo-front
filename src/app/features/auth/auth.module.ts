import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { AppInputValidatorDirective } from '@shared/validators/inputValidator.directive';
import { CowLoaderComponent } from '@shared/loader/cow-loader.component';
import { LoginComponent } from './login.component/login-form.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    MatInputModule,
    CowLoaderComponent,
    AppInputValidatorDirective,
    MatButtonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoginComponent,
      },
    ]),
  ],
})
export default class AuthModule {}
