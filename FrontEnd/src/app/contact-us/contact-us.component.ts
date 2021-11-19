import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  ContactForm:any = FormGroup;
  ImageUrl:any;
  constructor(private _Formbuilder:FormBuilder) { this.ContactFormValues() }
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
    // this.MyForm.get('file').setValue(this.ImageUrl);
  }

  RegisterUser(){
    const _FormValues = this.ContactForm.value;
    console.log(_FormValues); 
  }
  // regForm:any =  FormGroup;
  // packages:any = [];
  // message = '';
  // showMessage = false;
  // constructor(private _FormBuilder:FormBuilder, private userAuthService: UserAuthService, private packageService: PackagesService) { this.regFormModel() }

  // regFormModel() {
  //   this.regForm = this._FormBuilder.group({
  //     name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50), Validators.pattern(/^[a-zA-Z ]*$/)]],
  //     username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50), Validators.pattern(/^[a-z0-9]*$/)]],
  //     email: ['', [Validators.required, Validators.email]],
  //     mobile: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(15), Validators.pattern(/^[0-9*#+]*$/)]],
  //     password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
  //     confirmPassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
  //     package: ['', [Validators.required]],
  //     refral: [''],
  //   },
  //   {
  //     validator: ConfirmedValidator('password', 'confirmPassword')
  //   });

  // }
  // ngOnInit(): void {
  //   this.packageService.GetAllPackages().subscribe((res:any)=>{
  //     // console.log(res);
  //     this.packages = res.Result;
  //   })
  // }
  // onRegister() {
  //   this.userAuthService.registerUser(this.regForm.value).subscribe((res:any)=>{
  //     this.message = res.Message;
  //     this.showMessage = true;
  //     setTimeout(() => {
  //       this.showMessage = false;
  //     }, 3000);
  //   })
  //   this.regForm.reset();
  // }


  // MyFormModel() {
  //   this.MyForm = this._FormBuilder.group({
  //     name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50), Validators.pattern(/^[a-zA-Z ]*$/)]],
  //     email: ['', [Validators.required, Validators.email]],
  //     mobile: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(15), Validators.pattern(/^[0-9*#+]*$/)]],
  //     password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
  //     file: ['', [Validators.required]],
  //     address: ['', [Validators.required, Validators.minLength(6)]]
  //   });

  // }

  // onFileSelect(event) {
  //   this.ImageUrl=event.target.files[0];
  //   this.MyForm.get('file').setValue(this.ImageUrl);
  //   // to display the image on the angular
  //   // if (event.target.files) {
  //   //   var reader = new FileReader();
  //   //   reader.readAsDataURL(event.target.files[0]);
  //   //   reader.onload = (FinalData: any) => {
  //   //     this.ImageUrl = FinalData.target.result;
  //   //   }
  //   // }

  // }

  // onRegister() {
  //   const UserRegisterationData = new FormData();
  //   UserRegisterationData.append('name',this.MyForm.get('name').value);
  //   UserRegisterationData.append('email',this.MyForm.get('email').value);
  //   UserRegisterationData.append('mobile',this.MyForm.get('mobile').value);
  //   UserRegisterationData.append('password',this.MyForm.get('password').value);
  //   UserRegisterationData.append('UserImage',this.MyForm.get('file').value);
  //   UserRegisterationData.append('address',this.MyForm.get('address').value);

}
