import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from 'src/app/services/token-storage.service';


@Injectable({
  providedIn: 'root'
})
export class ClientGuard implements CanActivate, CanActivateChild {
  constructor(private tokenStorageService: TokenStorageService) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const ROLE = 'ROLE_USER';
    return ROLE === this.tokenStorageService.getRole();
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const ROLE = 'ROLE_USER';
    return ROLE === this.tokenStorageService.getRole();
  }
}
