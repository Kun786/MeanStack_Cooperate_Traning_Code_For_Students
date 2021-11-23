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

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'contactus',component:ContactUsComponent},
  {path:'login',component:LoginComponent},
  {path:'admin',component:AdminComponent,
  children:[
    {path:'',component:DashBoardComponent},
    {path:'dashboard',component:DashBoardComponent},
    {path:'users',component:UsersComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
