import { Component, OnInit } from '@angular/core';
import { UserService } from '../Shared/user.service';
import { baseUrl } from '../ApplicationConfiguration/ApplicationConfiguration';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  _DataArray:any=[];
  _BaseUrl = baseUrl;
  constructor(private _UserService:UserService) { }

  ngOnInit(): void {
    // this._UserService.GetAllUsers().subscribe((DataComingFromBAckend:any)=>{
    //   this._DataArray = DataComingFromBAckend.Result;
    //   console.log(this._DataArray);
    // })
  }

}
