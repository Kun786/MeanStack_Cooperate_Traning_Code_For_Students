import { Component, OnInit } from '@angular/core';
import { UserService } from '../Shared/user.service';
import { baseUrl } from '../ApplicationConfiguration/ApplicationConfiguration';
import { TestingService } from '../Shared/testing.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  _UserDataArray:any = [];
  _BaseUrl = baseUrl;
  _UpdateFrom:FormGroup | any;
  _Identity:any;
  _OldName:any;
  _OldAddress:any
  constructor(private _TestingService:TestingService, private _FormBuilder:FormBuilder ) { this.UpdateFormModel() }

  GetCardId(Id:any){
    this._UpdateFrom.get('_Id').setValue(Id);
    this._Identity = Id;
    this._TestingService.GetUserById(this._Identity).subscribe((DataComingFromBackEnd :any )=>{
      console.log(DataComingFromBackEnd);
      this._OldName = DataComingFromBackEnd.Result.Name;
      this._OldAddress = DataComingFromBackEnd.Result.Address;
    })
  }

  ngOnInit(): void {
    // this._UserService.GetAllUsers().subscribe((DataComingFromBAckend:any)=>{
    //   this._DataArray = DataComingFromBAckend.Result;
    //   console.log(this._DataArray);
    // })
    this._TestingService.GetAllUserData().subscribe((DataComingFromBackEnd:any)=>{
      this._UserDataArray = DataComingFromBackEnd.Result;
    })
  }

  UpdateFormModel(){
    this._UpdateFrom = this._FormBuilder.group({
      _Id:[''],
      NewName:[''],
      NewAddress:['']
    })
  }

  DeleteCard(_id:any){
    this._TestingService.DeleteCard(_id).subscribe((DataComingFromBackEnd:any)=>{
      this.ngOnInit();
    })
  }

  UpdateForm(){
    const _GetUpdateFormValue = this._UpdateFrom.value;
    this._TestingService.UpdateUserById(_GetUpdateFormValue).subscribe((DataComingFromBackEnd) => {
      console.log(DataComingFromBackEnd);
    })

  }

}
