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

  

  SaveLogInDataToLocalStorage(DataComingFromBackEnd: any) {
    console.log(DataComingFromBackEnd);
    localStorage.setItem('user_Id',DataComingFromBackEnd.Result._id);
    localStorage.setItem('access_user_token',DataComingFromBackEnd.Token);
    this._Router.navigate(['UserModule']);
  }

  ClearLogiInDataFromLocalStorage(){
    localStorage.removeItem('user_Id');
    localStorage.removeItem('access_user_token');
    this._Router.navigate(['login']);
  }

  CheckIfUserisLoggedIn(){
    return localStorage.getItem('access_user_token') != null;
  }
 
}
