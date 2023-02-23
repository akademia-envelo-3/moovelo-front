import { inject, Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of, switchMap } from 'rxjs';
import { AppState } from 'src/app/app.module';

@Injectable({
  providedIn: 'root',
})
export class IsNotAdminGuard implements CanActivate {
  private store = inject<Store<AppState>>(Store);
  private router = inject(Router);

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.store
      .select(state => state.user.type)
      .pipe(
        switchMap(result => {
          if (result === 'admin') {
            this.router.navigate(['/']);
            return of(false);
          }
          return of(true);
        })
      );
  }
}
