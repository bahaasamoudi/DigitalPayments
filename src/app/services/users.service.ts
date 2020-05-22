import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseUrl = environment.baseUrl + 'users/';


constructor(private http : HttpClient) { }



  getAllUsers() {
    return this.http.get<any>(this.baseUrl + 'GetAllUsers/')
  }

  
  convertUserToAdmin(userId: string) {
    return this.http.post<any>(this.baseUrl + 'ConvertUserToAdmin/', 
    {userId}).pipe(map(result => {
        return result;
    }, error => {
        return error;
    }));
  }
}
