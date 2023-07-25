import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Modify the request here (e.g., adding a custom header)
    const modifiedRequest = request.clone({
      setHeaders: {
        'Authorization': 'Bearer ' + sessionStorage.getItem('jwt_token'),
        'Access-Control-Allow-Credentials' : 'true'
      }
    });

    // Pass the modified request to the next handler
    return next.handle(modifiedRequest);
  }
}
