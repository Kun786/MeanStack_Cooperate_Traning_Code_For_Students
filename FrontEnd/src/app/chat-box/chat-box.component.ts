import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';
@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {
  constructor() { }
  _Socket:any;
  ngOnInit(): void {
    this.SetUpSocketConnection();
  }

  SetUpSocketConnection() {
    this._Socket = io.io('http://localhost:1234');
  }

  SendMessage() {
  }

}
