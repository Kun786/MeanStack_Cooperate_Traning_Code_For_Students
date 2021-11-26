import { Component, OnInit } from '@angular/core';
import { TestingService } from 'src/app/Shared/testing.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private _TestingService:TestingService) { }

  ngOnInit(): void {
  }

    logOut(){
      this._TestingService.ClearLogiInDataFromLocalStorage();
  }

}
