import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(private http : HttpClient, private router : Router) { }

  private baseUrl = environment.baseUrl + 'reports/';

  getProfits() {
    return this.http.get<any>(this.baseUrl + 'GetProfits/')
    }


 

}
