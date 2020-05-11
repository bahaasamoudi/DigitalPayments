import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShopsService {

  constructor(private http : HttpClient) { }

  private baseUrl = environment.baseUrl + 'shops/';
  GetAllShops() {
    return this.http.get<any>(this.baseUrl + 'GetAllShops/')
  }


  GetSearchShops(SearchText) {
    return this.http.post<any>(this.baseUrl + 'SearchShopes/', {SearchText});
  }
}
