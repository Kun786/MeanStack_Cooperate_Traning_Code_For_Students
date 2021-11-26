import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TestingService } from '../testing.service';

@Injectable({
  providedIn: 'root'
})
export class TestGuard implements CanActivate {
  constructor(private _TestingService:TestingService, private _Router:Router){}
  canActivate(){
    if(!this._TestingService.CheckIfUserisLoggedIn()){
      this._Router.navigate(['/login']);
      return false;
    }else{
      return true;
    }
  }
  
}
