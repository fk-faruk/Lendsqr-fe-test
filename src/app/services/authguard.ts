import { Injectable } from '@angular/core';
import {
  CanActivateFn,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { inject } from '@angular/core';
import { AuthserviceService } from './authservice.service';




export const routeGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  let authService = inject(AuthserviceService);
  // let loadingService = inject(LoaderService);

  let router = inject(Router);

  let isAuthenticated = authService.isAuthenticated();
  console.log(' authentication', isAuthenticated)


  if (isAuthenticated) {
    console.log(' authentication', isAuthenticated)
  // router.navigate(['/dashboard/users']);

    return true;
  } else {
    router.navigate(['/auth/signin']);
    return false;
  }
};
