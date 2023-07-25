import { Injectable } from '@angular/core';
import { registerUser } from '../models/register';
import { Observable, catchError, throwError} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  apiUrl : string = ''

  constructor(private http: HttpClient, private globalservice : GlobalService) {
      this.apiUrl = this.globalservice.base_serviceUrl + 'auth/register'
  }

  registerUser(user : registerUser) : Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'skipInterceptor' : 'true'
      // Add any other headers as required
    });

    return this.http.post<any>(this.apiUrl, user, { headers }).pipe(
      catchError((error) => {
        return throwError(() => error);
      }
    ));

  }
}
