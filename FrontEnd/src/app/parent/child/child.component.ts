import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() OutGoingValue: any;


  GroupForm:FormGroup | any;
  constructor(private _FormBuilder: FormBuilder) { 
    this.MyFormModel();
    console.log('Constructir Called');
   }

  ngOnInit(): void {
    console.log('NgOnInIt Is called');
  }
  
  ngOnChanges(): void {
    console.log('NgOnChangeCalled')
  }
  MyFormModel() {
    this.GroupForm = this._FormBuilder.group({
      name: [''],
    });

  }

  onRegister(){
    console.log(this.GroupForm.value);
  }
}
