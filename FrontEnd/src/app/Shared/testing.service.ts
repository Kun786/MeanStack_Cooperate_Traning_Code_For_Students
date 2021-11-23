import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserUrl ,GetUserUrl ,DeleteUserUrl } from '../ApplicationConfiguration/ApplicationConfiguration';

@Injectable({
  providedIn: 'root'
})
export class TestingService {
  
 
  

  constructor(private _HttpClient:HttpClient) { }

  SendDataToBackEnd(_Payload:any) {
    return this._HttpClient.post( UserUrl, _Payload);
  }

  GetAllUserData() {
   return this._HttpClient.get(GetUserUrl);
  }

  DeleteCard(_ImageUrl:any) {
    return this._HttpClient.delete(DeleteUserUrl);
  }

  CheckIfUserLoggedIn() {
    return true
  }
 
}
