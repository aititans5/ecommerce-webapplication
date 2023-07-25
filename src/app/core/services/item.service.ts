import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import { Observable, catchError, throwError } from 'rxjs';
import { item } from '../models/item';

@Injectable({
  providedIn: 'root',
})
export class ItemService {

  apiUrl : string = '';

  constructor(private http: HttpClient, private globalservice: GlobalService) {
    this.apiUrl = this.globalservice.base_serviceUrl + 'item/showItems';
  }

  getItemList() : Observable<item[]>{

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'skipInterceptor' : 'true',
      // Add any other headers as required
    });

    return this.http.post<any>(this.apiUrl, {'categoryid' : 0 }, { headers }).pipe(
      catchError((error) => {
        return throwError(() => error);
      }
    ));
  }
}
