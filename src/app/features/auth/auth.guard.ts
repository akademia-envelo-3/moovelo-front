import { Injectable, inject } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable, switchMap, of } from 'rxjs';
import { AuthService } from './authentication/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  private authService = inject(AuthService);
  private router = inject(Router);

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.isAuth$.pipe(
      switchMap(result => {
        if (result) this.router.navigate(['auth']);
        return of(result.hasAuth);
      })
    );
  }
}
