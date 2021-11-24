import { Component, OnInit } from '@angular/core';
import { TestingService } from 'src/app/Shared/testing.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private _TestingService:TestingService) { }

  ngOnInit(): void {
  }
LogOut(){
  this._TestingService.ClearLogiInDataFromLocalStorage();
}
}
