import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  fb = inject(NonNullableFormBuilder);
  loginForm = this.createControlGroup();
  createControlGroup() {
    return this.fb.group({
      email: this.fb.control('', {
        validators: [
          Validators.required,
          Validators.maxLength(100),
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      }),
      password: this.fb.control('', {
        validators: [Validators.required],
      }),
    });
  }
  checkValidationAndAuth = () => {
    if (this.loginForm.controls.email.errors && this.loginForm.controls.password.errors) {
      return;
    }
  };
}
