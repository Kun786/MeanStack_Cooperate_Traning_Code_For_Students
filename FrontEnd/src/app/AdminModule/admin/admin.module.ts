import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { DashBoardComponent } from '../components/DashBoard/dash-board/dash-board.component';
import { UsersComponent } from '../components/Users/users/users.component';
import { RouterModule } from '@angular/router';
import { ChatBoxComponent } from '../components/ChatBox/chat-box/chat-box.component';



@NgModule({
  declarations: [
    AdminComponent,
    DashBoardComponent,
    UsersComponent,
    ChatBoxComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class AdminModule { }
