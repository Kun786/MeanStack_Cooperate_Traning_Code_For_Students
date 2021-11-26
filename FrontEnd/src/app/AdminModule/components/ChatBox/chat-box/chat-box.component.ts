import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ChatService } from 'src/app/Shared/Chat/chat.service';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {
  _MessageForm:FormGroup | any;
  _ResponseMessage:any
  _ActualMessage:any;
  constructor(private _FormBuilder:FormBuilder, private _ChatService:ChatService) { this.MessageFormModel() }

  ngOnInit(): void {
    this._ChatService.GetMessageFromAdmin().subscribe((DataComingFromBackEnd:any)=>{
      this._ActualMessage = DataComingFromBackEnd.Result.Message;
    })
  }

  MessageFormModel(){
    this._MessageForm = this._FormBuilder.group({
      Message:['']
    })
  }

  SendMessage(){
    const _Message = this._MessageForm.value;
    this._ChatService.SendMessageToUser(_Message).subscribe((DataComingFromBackEnd:any)=>{
      this._ResponseMessage = DataComingFromBackEnd.Message;
    })
  }
}
