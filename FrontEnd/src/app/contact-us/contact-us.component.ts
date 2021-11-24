import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TestingService } from '../Shared/testing.service';
import { UserService } from '../Shared/user.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  ContactForm:any = FormGroup;
  ImageUrl:any;
  constructor(private _Formbuilder:FormBuilder, private _TestingService:TestingService) { this.ContactFormValues() }
  ngOnInit(){}

  ContactFormValues(){
    this.ContactForm = this._Formbuilder.group({
      Name:[''],
      Mobile:[''],
      Address:[''],
      Password:[''],
      Email:[''],
      ImageUrl:['']
    })
  }
  onFileSelect(event:any){
    this.ImageUrl=event.target.files[0];
    this.ContactForm.get('ImageUrl').setValue(this.ImageUrl);
  }

  RegisterUser(){
    // const _UserRegisterationData = new FormData();
    // _UserRegisterationData.append('Name',this.ContactForm.get('Name').value);
    // _UserRegisterationData.append('Mobile',this.ContactForm.get('Mobile').value);
    // _UserRegisterationData.append('Address',this.ContactForm.get('Address').value);
    // _UserRegisterationData.append('ImageUrl',this.ContactForm.get('ImageUrl').value);
    // this._UserService.SendData(_UserRegisterationData).subscribe((DataComingFromBackEnd:any)=>{
    //   console.log(DataComingFromBackEnd);
    // })

    const _MyFormData = new FormData();
    _MyFormData.append('Name',this.ContactForm.get('Name').value);
    _MyFormData.append('MobileNumber',this.ContactForm.get('Mobile').value);
    _MyFormData.append('Address',this.ContactForm.get('Address').value);
    _MyFormData.append('Password',this.ContactForm.get('Password').value);
    _MyFormData.append('Email',this.ContactForm.get('Email').value);
    _MyFormData.append('ImageUrl',this.ContactForm.get('ImageUrl').value);
    this._TestingService.SendDataToBackEnd(_MyFormData).subscribe((DataComingFromBackEnd:any)=>{
      console.log(DataComingFromBackEnd);
      this.ContactForm.reset();
    })


  }

}
