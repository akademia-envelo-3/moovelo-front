import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { userActions } from '../store/user.action';
import { AppState } from 'src/app/app.module';
import { LoggedUserData, LoginData } from './auth.interface';
import { API_URL } from '@core/env.token';
import { TokenService } from '../token.service';

@Injectable()
export class AuthService {
  private http = inject(HttpClient);
  private store = inject<Store<AppState>>(Store);
  private router = inject(Router);
  private apiUrl = inject(API_URL);
  private tokenService = inject(TokenService);
  private url = '/login';

  private auth$$ = new BehaviorSubject<{ hasAuth: boolean }>({
    hasAuth: false,
  });

  constructor() {
    this.initAuth();
  }

  get auth$() {
    return this.auth$$.asObservable();
  }

  private initAuth() {
    if (this.tokenService.token && !this.tokenService.isTokenExpired()) {
      this.auth$$.next({ hasAuth: true });
    }
  }

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
            this.tokenService.saveToken(accessToken);
            this.store.dispatch(userActions.changeRole({ role: user.type, id: user.id }));
            this.router.navigate(['/']);
          },
        })
      )
      .subscribe();
  }

  getLoggedUser(id: string) {
    return this.http.get<LoggedUserData>(this.apiUrl + `/users/${id}`);
  }

  logout() {
    this.tokenService.removeToken();
    this.auth$$.next({ hasAuth: false });
    this.router.navigate(['/auth']);
  }
}
