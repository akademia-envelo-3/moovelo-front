import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, tap } from 'rxjs';

interface LoginData {
  accessToken: string;
  user: {
    email: string;
    password: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loginData: LoginData = { accessToken: '', user: { email: '', password: '' } };
  http = inject(HttpClient);
  private router = inject(Router);
  url = 'http://localhost:3000/users';

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
            console.log(res);
            const { accessToken, user } = res;
            this.auth$$.next({ hasAuth: true });
            localStorage.setItem('token', accessToken);
            localStorage.setItem('user', JSON.stringify(user));
            console.log(this.authValue);
            // this.router.navigate(['']);
          },
        })
      );
  }
}
