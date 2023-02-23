import { ChangeDetectorRef, inject, ViewRef } from '@angular/core';
import { Subject } from 'rxjs';

export function useDestroyToken() {
  const cdr = inject(ChangeDetectorRef) as ViewRef;
  const destorySubject$$ = new Subject<void>();

  cdr.onDestroy(() => {
    destorySubject$$.next();
    destorySubject$$.complete();
  });

  return destorySubject$$.asObservable();
}
