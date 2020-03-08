import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  url: string = "https://localhost:44344";


  constructor(private http: HttpClient) { }

  Charge(Amount) {
    return this.http.post(this.url + '/api/Transaction/GenerateBarcode', {Amount})
  }
}
