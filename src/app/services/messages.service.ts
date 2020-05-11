import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private baseUrl = environment.baseUrl + 'messages/';

  constructor(private http : HttpClient) { }


  ContactUs(name: string, email: string, subject: string, message: string) {
    return this.http.post<any>(this.baseUrl + 'ContactUs/', 
    {name, email,  subject, message}).pipe(map(result => {
        return result;
    }, error => {
        return error;
    }));
  }

  getAllMessages() {
    return this.http.get<any>(this.baseUrl + 'GetAllMessages/')
  }
  
}
