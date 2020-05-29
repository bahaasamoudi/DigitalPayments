import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

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

  AddShop(shopName: string, typeOfService: string, shopWebsite: string, shopPhone: string, shopLocation: string, description: string) {
    return this.http.post<any>(this.baseUrl + 'AddShop/', 
    {shopName, typeOfService, shopWebsite,  shopPhone, shopLocation, description}).pipe(map(result => {
        return result;
    }, error => {
        return error;
    }));
  }

  AcceptShop(shopId: string) {
    return this.http.post<any>(this.baseUrl + 'AcceptShop/', 
    {shopId}).pipe(map(result => {
        return result;
    }, error => {
        return error;
    }));
  }

  GetNotAccesptedShops() {
    return this.http.get<any>(this.baseUrl + 'GetNotAccesptedShops/')
  }

  GetShopInformation() {
    return this.http.get<any>(this.baseUrl + 'GetShopInformation/')
  }
}
