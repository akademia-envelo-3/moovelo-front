import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { pattern } from '@shared/patterns/patterns';

import { AuthService } from '../authentication/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login.component.scss'],

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  private fb = inject(NonNullableFormBuilder);
  private authService = inject(AuthService);

  loginForm = this.createControlGroup();

  createControlGroup() {
    return this.fb.group({
      email: this.fb.control('', {
        validators: [Validators.required, Validators.maxLength(100), Validators.pattern(pattern.emailValidatorRegex)],
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
    this.loginForm.markAllAsTouched();
    if (this.loginForm.invalid) {
      return;
    }
    this.authService.logIn(this.emailCtrl.value, this.passwordCtrl.value);
  }
}
