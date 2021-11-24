import { TestingService } from './../testing.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuradGuard implements CanActivate {
  constructor (private _Router:Router , private _TestingService:TestingService) {}
  canActivate(){
    if(!this._TestingService.CheckIfUserisLoggedIn()){
      this._Router.navigate(['/login']);
      return false;
    } else {
      return true;
    }
  }
  
}
