import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ServiceUtility } from '@app/utility/service-utility'

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private serviceUtility: ServiceUtility) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(this.serviceUtility.handleError));
    }
}