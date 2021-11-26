import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SendMessageToAdminUrl, SendMessageToUserUrl, GetMessageFromAdminUrl, GetMessageFromUserUrl } from '../../ApplicationConfiguration/ApplicationConfiguration';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private _HttpClient:HttpClient) { }

  SendMessageToUser(_Payload:any){
    return this._HttpClient.post(SendMessageToUserUrl,_Payload);
  }

  SendMessageToAdmin(_Payload:any){
    return this._HttpClient.post(SendMessageToAdminUrl,_Payload);
  }

  GetMessageFromAdmin(){
    return this._HttpClient.get(GetMessageFromAdminUrl);
  }

  GetMessageFromUser(){
    return this._HttpClient.get(GetMessageFromUserUrl);
  }
  
}
