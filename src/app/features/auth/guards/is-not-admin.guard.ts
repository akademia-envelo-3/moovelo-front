import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { useStore } from '@shared/inject-hooks/user-store';
import { map } from 'rxjs';

export const isNotAdminGuard = () => {
  const router = inject(Router);
  const store = useStore();

  return store
    .select(state => state.user.type)
    .pipe(
      map(userType => {
        return userType === 'admin' ? router.navigate(['/']) : true;
      })
    );
};
