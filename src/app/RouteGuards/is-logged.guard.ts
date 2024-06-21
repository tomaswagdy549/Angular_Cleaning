import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class loginInGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (!this.authService.isLogged.value) {
      return true;
    } else {
      this.router.navigateByUrl('/Home');
      return false;
    }
  }
};
