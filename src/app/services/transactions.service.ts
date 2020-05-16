import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { flatMap, first, shareReplay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private http : HttpClient) { }

  private baseUrl = environment.baseUrl + 'Transactions/';

  // Insert the Category
  generateBarcode(Amount) {
    
      return this.http.post<any>(this.baseUrl + 'GenerateBarcode', {Amount});
  }

  charge(Barcode: string) {
    
    return this.http.post<any>(this.baseUrl + 'Charge', {Barcode});
}

    purchase(Barcode: string) {
        
      return this.http.post<any>(this.baseUrl + 'Purchase', {Barcode});
    }

    GetBill(BillId: number) {
        
      return this.http.post<any>(this.baseUrl + 'GetBill', {BillId});
    }

 
}
