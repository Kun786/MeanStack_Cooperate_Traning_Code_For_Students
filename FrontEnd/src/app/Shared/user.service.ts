import { Injectable } from '@angular/core';
import { UserUrl, GetUserUrl } from '../ApplicationConfiguration/ApplicationConfiguration';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private _HttpClient:HttpClient) { }

  // SendData(_PayLoad:any) {
  //   return this._HttpClient.post(UserUrl,_PayLoad)
  // }

  // GetAllUsers() {
  //  return this._HttpClient.get(GetUserUrl);
  // }
}
