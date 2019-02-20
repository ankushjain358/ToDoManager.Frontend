import { Component, OnInit } from '@angular/core';
import { AlertService } from '@app/services/alert.service';
import { AlertModel } from '@app/models/alert-model';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  public alertModel: AlertModel;

  constructor(private alertService: AlertService) { }

  ngOnInit() {

    this.alertService.getMessage().subscribe(x => {
      this.alertModel = x;
    })
  }

}
