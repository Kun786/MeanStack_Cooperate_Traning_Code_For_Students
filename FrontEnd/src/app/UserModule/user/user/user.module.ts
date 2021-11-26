import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserHeaderComponent } from '../../components/UserHeader/user-header/user-header.component';
import { UserManagementComponent } from '../../components/UserManagement/user-management/user-management.component';
import { RouterModule } from '@angular/router';
import { UserChatBoxComponent } from '../../components/UserChatBox/user-chat-box/user-chat-box.component';



@NgModule({
  declarations: [
    UserComponent,
    UserHeaderComponent,
    UserManagementComponent,
    UserChatBoxComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class UserModule { }
