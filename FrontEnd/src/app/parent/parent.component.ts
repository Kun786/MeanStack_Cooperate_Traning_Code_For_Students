import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  Value="Angular from Parent To child"
  

  GroupForm:FormGroup | any;
  constructor(private _FormBuilder: FormBuilder) { this.MyFormModel() }

  ngOnInit(): void {
  }
  
  MyFormModel() {
    this.GroupForm = this._FormBuilder.group({
      name: [''],
      age:[''],
      address:['']
    });

  }

  onRegister(){
    this.Value = this.GroupForm.value;
    console.log(this.Value);
  }
}
