import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { User } from 'src/app/app.module';
import { AuthService } from '../authentication/auth.service';
import { emailValidatorRegex } from './emailValidatorPattern';

@Component({
  selector: 'app-login',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login.component.scss'],

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  private fb = inject(NonNullableFormBuilder);
  private authService = inject(AuthService);
  store = inject<Store<User>>(Store);
  user$ = this.store.select(state => state.User.type);

  loginForm = this.createControlGroup();

  createControlGroup() {
    return this.fb.group({
      email: this.fb.control('', {
        validators: [Validators.required, Validators.maxLength(100), Validators.pattern(emailValidatorRegex)],
      }),
      password: this.fb.control('', {
        validators: [Validators.required],
      }),
    });
  }

  get passwordCtrl() {
    return this.loginForm.controls.password;
  }
  get emailCtrl() {
    return this.loginForm.controls.email;
  }

  checkValidationAndAuth() {
    this.authService.logIn(this.emailCtrl.value, this.passwordCtrl.value).subscribe();
    this.loginForm.markAllAsTouched();
    if (this.loginForm.invalid) {
      return;
    }
  }
}
