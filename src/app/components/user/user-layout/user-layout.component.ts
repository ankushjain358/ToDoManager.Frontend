import { Component, OnInit } from '@angular/core';
import { AppConstants } from '../../../utility/app.constants'
import { User } from '@app/models/user-model'
import { ServiceUtility} from '@app/utility/service-utility'
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.scss']
})
export class UserLayoutComponent implements OnInit {

  public applicationName: string;
  public currentUser: User;

  constructor(private serviceUtility:ServiceUtility, private router:Router) { 
    
    //set application's name
    this.applicationName = AppConstants.AppName;

    //user logout event handler
    this.serviceUtility.userLogoutSubject.subscribe(x=>{
      localStorage.clear();
      this.router.navigate(['/account/login']);
    });
  }
   
  ngOnInit() {
    this.currentUser = this.serviceUtility.getCurrentUser();
  }

  public logout(){
    this.serviceUtility.triggerLogout();
  }

  

}
