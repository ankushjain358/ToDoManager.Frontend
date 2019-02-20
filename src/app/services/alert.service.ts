import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import  {ErrorModel} from '@app/models/error-model'
import {AlertModel} from '@app/models/alert-model'

@Injectable({
   providedIn: 'root'
})
export class AlertService {
    private subject = new Subject<any>();
    private keepAfterNavigationChange = false;

    constructor(private router: Router) {
        // clear alert message on route change
        router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    this.keepAfterNavigationChange = false;
                } else {
                    // clear alert
                    this.subject.next();
                }
            }
        });
    }

    success(message: string, keepAfterNavigationChange = false) {
        this.keepAfterNavigationChange = keepAfterNavigationChange;
      this.subject.next(new AlertModel(true, message, null, false));
    }

    error(errorModel: ErrorModel, keepAfterNavigationChange = false) {
     
        // if(!( errorModel instanceof ErrorModel)){
        //   errorModel = new ErrorModel(500, "An unexpedted error occured.", null);
        // }

        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next(new AlertModel(false, null, errorModel, false));
    }

  getMessage(): Observable<AlertModel> {
        return this.subject.asObservable();
    }
}