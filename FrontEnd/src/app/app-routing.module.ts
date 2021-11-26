import { GalleryComponent } from './gallery/gallery.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AdminModule } from './AdminModule/admin/admin.module';
import { AdminComponent } from './AdminModule/admin/admin.component';
import { DashBoardComponent } from './AdminModule/components/DashBoard/dash-board/dash-board.component';
import { UsersComponent } from './AdminModule/components/Users/users/users.component';
import { LoginComponent } from './login/login.component';
import { AdminGuradGuard } from './Shared/Auth/admin-gurad.guard';
import { UserComponent } from './UserModule/user/user/user.component';
import { UserHeaderComponent } from './UserModule/components/UserHeader/user-header/user-header.component';
import { UserManagementComponent } from './UserModule/components/UserManagement/user-management/user-management.component';
import { TestGuard } from './Shared/Auth/test.guard';
import { ChatBoxComponent } from './AdminModule/components/ChatBox/chat-box/chat-box.component';
import { UserChatBoxComponent } from './UserModule/components/UserChatBox/user-chat-box/user-chat-box.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin', canActivate: [AdminGuradGuard], component: AdminComponent,
    children: [
      { path: '', component: DashBoardComponent },
      { path: 'dashboard', component: DashBoardComponent },
      { path: 'users', component: UsersComponent },
      { path: 'chat', component:ChatBoxComponent},
    ]
  },
  {
    path: 'UserModule', canActivate: [TestGuard], component: UserComponent,
    children: [
      { path: '', component: UserHeaderComponent },
      { path: 'UserHead', component: UserHeaderComponent },
      { path: 'UserManagement', component: UserManagementComponent },
      { path: 'uchat', component:UserChatBoxComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
