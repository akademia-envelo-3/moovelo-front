import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { userActions } from '../store/user.action';
import { User } from 'src/app/app.module';

interface LoginData {
  accessToken: string;
  user: {
    email: string;
    password: string;
    type: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loginData: LoginData = { accessToken: '', user: { email: '', password: '', type: '' } };
  http = inject(HttpClient);
  store = inject<Store<User>>(Store);
  private router = inject(Router);
  url = 'http://localhost:3000/login';

  private auth$$ = new BehaviorSubject<{ hasAuth: boolean }>({
    hasAuth: false,
  });

  get auth$() {
    return this.auth$$.asObservable();
  }

  get authValue() {
    return this.auth$$.value;
  }

  logIn(email: string, password: string) {
    return this.http
      .post<LoginData>(this.url, {
        email: email,
        password: password,
      })
      .pipe(
        tap({
          next: res => {
            const { accessToken, user } = res;
            this.auth$$.next({ hasAuth: true });
            localStorage.setItem('token', accessToken);
            localStorage.setItem('user', JSON.stringify(user));
            this.decideRole(user.type);
            this.router.navigate(['/theme']);
          },
        })
      );
  }

  decideRole(role: string) {
    if (role === 'user') {
      this.store.dispatch(userActions.changeDefaultToUser());
    }
    if (role === 'admin') {
      this.store.dispatch(userActions.changeDefaultToAdmin());
    }
  }
}
