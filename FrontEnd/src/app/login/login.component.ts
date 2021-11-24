import { TestingService } from './../Shared/testing.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  _LoginForm:FormGroup | any;
  constructor(private _FormBuilder:FormBuilder, private _TestingService:TestingService) { this.LoginFormModel() }

  LoginFormModel(){
    this._LoginForm = this._FormBuilder.group({
      Email:[''],
      Password:['']
    }) 
  }
  ngOnInit(): void {
  }

  LogIn(){
    const _LoginFormValues = this._LoginForm.value;
    this._TestingService.LogIn(_LoginFormValues).subscribe((DataComingFromBackEnd:any)=>{
      this._TestingService.SaveLogInDataToLocalStorage(DataComingFromBackEnd);
    })
  }

}
