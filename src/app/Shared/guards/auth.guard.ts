import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  IsLogin = new BehaviorSubject(false)

  constructor(private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      let Token = localStorage.getItem('token');
      if(Token) {
        this.IsLogin.next(true)
        return true;
      }
      this.router.navigateByUrl('/login');
      this.IsLogin.next(false);
      return false;
  }

}
