import { Component, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ChatService } from 'src/app/Shared/Chat/chat.service';

@Component({
  selector: 'app-user-chat-box',
  templateUrl: './user-chat-box.component.html',
  styleUrls: ['./user-chat-box.component.css']
})
export class UserChatBoxComponent implements OnInit {

  _MessageForm:FormGroup | any;
  _ResponseMessage:any
  _ActualMessage:any =[];
  _TempDataForMessages = true;
  constructor(private _FormBuilder:FormBuilder,private _ChatService:ChatService) { this.MessageFormModel() }

  ngOnInit(): void {
    this._ChatService.GetMessageFromUser().subscribe((DataComingFromBackEnd:any)=>{
      this._ActualMessage = DataComingFromBackEnd.Result;
    })
  }

  ngOnChanges(): void{
    this._ChatService.GetMessageFromUser().subscribe((DataComingFromBackEnd:any)=>{
      this._ActualMessage = DataComingFromBackEnd.Result;
      console.log(this._ActualMessage);
      console.log(DataComingFromBackEnd);
    })
  }

  MessageFormModel(){
    this._MessageForm = this._FormBuilder.group({
      Message:['']
    })
  }

  SendMessage(){
    const _Message = this._MessageForm.value;
    this._ChatService.SendMessageToAdmin(_Message).subscribe((DataComingFromBackEnd:any)=>{
      this._ResponseMessage = DataComingFromBackEnd.Message;
    })
    this.ngOnChanges();
    this.ngOnInit();
  }
}
