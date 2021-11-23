import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  _LoginForm:FormGroup | any;
  constructor(private _FormBuilder:FormBuilder) { this.LoginFormModel() }

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
    console.log(_LoginFormValues);
  }

}
