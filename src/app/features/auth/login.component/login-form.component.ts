import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { emailValidatorRegex } from './emailValidatorPattern';
@Component({
  selector: 'app-login',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login.component.scss'],

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  private fb = inject(NonNullableFormBuilder);

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

  checkValidationAndAuth = () => {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.invalid) {
      return;
    }
  };
}
