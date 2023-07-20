import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  base_serviceUrl : string = '';

  constructor() {
    this.base_serviceUrl = 'http://127.0.0.1:8000/api/v1/';
  }
}
