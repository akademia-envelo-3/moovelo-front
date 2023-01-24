import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { userActions } from '../store/user.action';
import { AppState } from 'src/app/app.module';
import { LoginData } from './auth.interface';
import { API_URL } from '@core/env.token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private store = inject<Store<AppState>>(Store);
  private router = inject(Router);
  private apiUrl = inject(API_URL);
  private url = '/login';

  private auth$$ = new BehaviorSubject<{ hasAuth: boolean }>({
    hasAuth: false,
  });

  logIn(email: string, password: string) {
    return this.http
      .post<LoginData>(this.apiUrl + this.url, {
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
            this.store.dispatch(userActions.changeRole({ role: user.type, id: user.id }));
            this.router.navigate(['/theme']);
          },
        })
      )
      .subscribe();
  }
}
