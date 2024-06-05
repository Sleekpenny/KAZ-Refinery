import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthGuardService } from './auth-guard.service';

@Injectable({
  providedIn: 'root'
})
export class authGuardGuard implements CanActivate {

  constructor(private authService: AuthGuardService, private router: Router){}

  canActivate( 
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
    return this.authService.isAuthenticated().then((authenthicated: boolean) => {
        if(authenthicated) {
         // this.router.navigate(['/main']);
          return true;
        } else {
         return  this.router.navigate(['/page-sign-in']);
        }
      }
    )
  }
}


/* export const authGuardGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean => {
  return true;
}; */
