import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.module';
import { AuthService } from './authentication/auth.service';
import { userActions } from './store/user.action';
import { TokenService } from './token.service';

export function fetchedLoggedUser() {
  const tokenService = inject(TokenService);
  const authService = inject(AuthService);
  const store = inject<Store<AppState>>(Store);

  const { token, decodedToken } = tokenService;

  if (token) {
    if (!tokenService.isTokenExpired() && decodedToken!.sub) {
      authService.getLoggedUser(decodedToken!.sub).subscribe(result => {
        store.dispatch(userActions.changeRole({ role: result.type, id: result.id }));
      });
    } else if (tokenService.isTokenExpired()) {
      tokenService.removeToken();
    }
  }
}
