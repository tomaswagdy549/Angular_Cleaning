import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { Injectable } from '@angular/core';
import { environment } from '../Enviroment/enviroment';
@Injectable({
  providedIn: 'root',
})
export class authorizedToEditOrDeleteGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.authService.loggedUser.value.email==environment.adminEmail) {
      return true;
    } else {
      this.router.navigateByUrl('/Home');
      return false;
    }
  }
};








