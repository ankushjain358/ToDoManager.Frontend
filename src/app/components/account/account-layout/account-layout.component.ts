import { Component, OnInit } from '@angular/core';
import { AppConstants } from '../../../utility/app.constants'

@Component({
  selector: 'app-account-layout',
  templateUrl: './account-layout.component.html',
  styleUrls: ['./account-layout.component.scss']
})
export class AccountLayoutComponent implements OnInit {

  public applicationName: string 

  constructor() { 
    this.applicationName = AppConstants.AppName;
  }

  ngOnInit() {
  }

}
