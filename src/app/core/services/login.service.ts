import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { login_user } from '../models/login_user';
import { userlogin_detail } from '../models/userlogin_response';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  apiUrl: string;

  constructor(private globalservice: GlobalService, private http: HttpClient) {
    this.apiUrl = globalservice.base_serviceUrl + 'auth/login';
  }

  loginUser(user: login_user): Observable<userlogin_detail> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      skipInterceptor: 'true',
      // Add any other headers as required
    });

    return this.http
      .post<userlogin_detail>(this.apiUrl, user, { headers })
      .pipe(
        catchError((error) => {
          return throwError(() => error);
        })
      );
  }
}
