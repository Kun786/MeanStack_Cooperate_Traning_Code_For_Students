import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../Shared/user.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  ContactForm:any = FormGroup;
  ImageUrl:any;
  constructor(private _Formbuilder:FormBuilder, private _UserService:UserService) { this.ContactFormValues() }
  ngOnInit(){}

  ContactFormValues(){
    this.ContactForm = this._Formbuilder.group({
      Name:[''],
      Mobile:[''],
      Address:[''],
      ImageUrl:['']
    })
  }
  onFileSelect(event:any){
    this.ImageUrl=event.target.files[0];
    this.ContactForm.get('ImageUrl').setValue(this.ImageUrl);
  }

  RegisterUser(){
    const _UserRegisterationData = new FormData();
    _UserRegisterationData.append('Name',this.ContactForm.get('Name').value);
    _UserRegisterationData.append('Mobile',this.ContactForm.get('Mobile').value);
    _UserRegisterationData.append('Address',this.ContactForm.get('Address').value);
    _UserRegisterationData.append('ImageUrl',this.ContactForm.get('ImageUrl').value);
    this._UserService.SendData(_UserRegisterationData).subscribe((DataComingFromBackEnd:any)=>{
      console.log(DataComingFromBackEnd);
    })

  }

}
