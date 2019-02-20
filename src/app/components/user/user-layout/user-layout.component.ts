import { Component, OnInit } from '@angular/core';
import { AppConstants } from '../../../utility/app.constants'
import { User } from '@app/models/user-model'
import { ServiceUtility} from '@app/utility/service-utility'

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.scss']
})
export class UserLayoutComponent implements OnInit {

  public applicationName: string;
  public currentUser: User;

  constructor(private serviceUtility:ServiceUtility) { 
    this.applicationName = AppConstants.AppName;
  }
   
  ngOnInit() {
    this.currentUser = this.serviceUtility.getCurrentUser();
  }

}
