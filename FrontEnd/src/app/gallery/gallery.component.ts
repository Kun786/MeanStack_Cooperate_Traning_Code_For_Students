import { Component, OnInit } from '@angular/core';
import { UserService } from '../Shared/user.service';
import { baseUrl } from '../ApplicationConfiguration/ApplicationConfiguration';
import { TestingService } from '../Shared/testing.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  _UserDataArray:any=[];
  _BaseUrl =baseUrl;
  constructor(private _TestingService:TestingService) { }

  ngOnInit(): void {
    // this._UserService.GetAllUsers().subscribe((DataComingFromBAckend:any)=>{
    //   this._DataArray = DataComingFromBAckend.Result;
    //   console.log(this._DataArray);
    // })
    this._TestingService.GetAllUserData().subscribe((DataComingFromBackEnd:any)=>{
      this._UserDataArray = DataComingFromBackEnd.Result;
    })
  }

  DeleteCard(_id:any){
    this._TestingService.DeleteCard(_id).subscribe((DataComingFromBackEnd:any)=>{
      this.ngOnInit();
    })
  }

}
