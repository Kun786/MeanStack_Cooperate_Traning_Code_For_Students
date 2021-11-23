import { TestingService } from './../testing.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuradGuard implements CanActivate {
  constructor (private _Router:Router , private _TestingService:TestingService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!this._TestingService.CheckIfUserLoggedIn()){
      this._Router.navigate(['/contactus']);
      return false;
    } else {
      return true;
    }
  }
  
}
