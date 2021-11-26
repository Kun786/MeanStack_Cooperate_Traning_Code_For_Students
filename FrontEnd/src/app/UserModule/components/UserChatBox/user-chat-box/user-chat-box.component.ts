import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-chat-box',
  templateUrl: './user-chat-box.component.html',
  styleUrls: ['./user-chat-box.component.css']
})
export class UserChatBoxComponent implements OnInit {

  _MessageForm:FormGroup | any;

  constructor(private _FormBuilder:FormBuilder) { this.MessageFormModel() }

  ngOnInit(): void {
  }

  MessageFormModel(){
    this._MessageForm = this._FormBuilder.group({
      Message:['']
    })
  }

  SendMessage(){
    const _Message = this._MessageForm.value;
    console.log(_Message);
  }
}
