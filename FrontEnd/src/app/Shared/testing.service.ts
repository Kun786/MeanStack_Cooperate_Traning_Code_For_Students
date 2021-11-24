import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserUrl ,GetUserUrl ,DeleteUserUrl,LoginUserUrl } from '../ApplicationConfiguration/ApplicationConfiguration';

@Injectable({
  providedIn: 'root'
})
export class TestingService {
  
 
  

  constructor(private _HttpClient:HttpClient, private _Router:Router) { }

  SendDataToBackEnd(_Payload:any) {
    return this._HttpClient.post( UserUrl, _Payload);
  }

  LogIn(_Payload:any){
    return this._HttpClient.post( LoginUserUrl , _Payload);

  }

  GetAllUserData() {
   return this._HttpClient.get(GetUserUrl);
  }

  DeleteCard(_Params:any) {
    return this._HttpClient.delete(DeleteUserUrl+`${_Params}`);
  }

  CheckIfUserLoggedIn() {
    return true
  }

  SaveLogInDataToLocalStorage(DataComingFromBackEnd: any) {
    localStorage.setItem('admin_Id',DataComingFromBackEnd.Result._id);
    localStorage.setItem('access_admin_token',DataComingFromBackEnd.Token);
    this._Router.navigate(['admin']);
  }

  ClearLogiInDataFromLocalStorage(){
    localStorage.removeItem('admin_Id');
    localStorage.removeItem('access_admin_token');
    this._Router.navigate(['login']);
  }

  CheckIfUserisLoggedIn(){
    return localStorage.getItem('access_admin_token') != null;
  }
 
}
