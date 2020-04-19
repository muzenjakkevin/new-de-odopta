import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthenticationService } from '../app/_service';

@Injectable()

/**
 * The intercept method passes a request to a handler in a chain by calling next.handle(request)
 * and handles errors by piping the observabel response through the catchError operator by calling .pipe(catchError())
 * Checks if the status code is 401 and automatically logs the user out by calling this.authenticationService.logout().
 * After logout the application is reloaded by calling location.reload(true) which redirects the user to the login page.
 * Extracts the error message from the error response object or defaults to the response status text if there isnt an
 * error message.
 */

export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.authenticationService.logout();
                location.reload(true);
            }
            
            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
    }
}