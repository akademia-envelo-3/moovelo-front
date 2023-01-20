import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { AppInputValidatorDirective } from '@shared/inputValidator.directive';
import { LoginComponent } from './login.component/login-form.component';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './store/user.reducer';
import { userFeatureKey } from './store/user.state';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    MatInputModule,
    AppInputValidatorDirective,
    MatButtonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoginComponent,
      },
    ]),
    StoreModule.forFeature(userFeatureKey, userReducer),
  ],
})
export default class AuthModule {}
