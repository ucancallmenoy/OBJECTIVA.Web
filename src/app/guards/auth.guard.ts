// 2. Create auth.guard.ts
import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { map, take } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  return authService.isAuthenticated().pipe(
    take(1),
    map(authenticated => {
      if (authenticated) {
        return true;
      } else {
        router.navigate(['/login-register']);
        return false;
      }
    })
  );
};