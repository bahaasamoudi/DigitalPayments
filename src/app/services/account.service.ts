import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  BehaviorSubject, Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import * as JWT from 'jwt-decode';
import { User } from '../dashboard/interfaces/user';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http : HttpClient, private router : Router) { }

  private baseUrl = environment.baseUrl + 'account/';


  private loginStatus = new BehaviorSubject<boolean>(this.checkLoginStatus());
  private UserName    = new BehaviorSubject<string>(localStorage.getItem('username'));
  private UserId    = new BehaviorSubject<string>(localStorage.getItem('userid'));
  private UserRole    = new BehaviorSubject<string>(localStorage.getItem('userRole'));
  private user$: Observable<User>;

    register(username: string, password: string, email : string, firstName: string, lastName: string,
       phoneNumber: number,  country: string, gender: number, idNumber: string, birthDate: Date) {
      return this.http.post<any>(this.baseUrl + 'register', {username, password, email, firstName, lastName,
         phoneNumber,  country: country, gender, idNumber, birthDate }).pipe(map(result => {
          return result;
      }, error => {
          return error;
      }));
    }

    //Login Method
    login(username: string, password: string) {
        return this.http.post<any>(this.baseUrl + "login/", {username, password}).pipe(
          map(result => {
            if(result && result.token) {
              this.loginStatus.next(true);
              localStorage.setItem('loginStatus', '1');
              localStorage.setItem('jwt', result.token);
              localStorage.setItem('username', result.username);
              localStorage.setItem('expiration', result.expiration);
              localStorage.setItem('userRole', result.userRole);
              this.UserName.next(localStorage.getItem('username'));
              this.UserId.next(localStorage.getItem('userid'));
              this.UserRole.next(localStorage.getItem('userRole'));
            }
            return result;
          })
        );
    }


    logout() {
        this.loginStatus.next(false);
        localStorage.removeItem('jwt');
        localStorage.removeItem('userRole');
        localStorage.removeItem('username');
        localStorage.removeItem('userid');
        localStorage.removeItem('expiration');
        localStorage.setItem('loginStatus', '0');
        this.router.navigate(['']);
    }

    checkLoginStatus() : boolean {
        var loginCookie = localStorage.getItem("loginStatus");
        if(loginCookie == "1")  {
          if(localStorage.getItem('jwt') == null || localStorage.getItem('jwt') == undefined) {
              return false;
          }
          const token = localStorage.getItem('jwt');
          const decoded = JWT(token);
          if(decoded.exp == undefined) {
            return false;
          }
          const date = new Date(0);
          let tokenExpDate = date.setUTCSeconds(decoded.exp);
          if(tokenExpDate.valueOf() > new Date().valueOf()) {
            return true;
          }
          return false;
        }
        return false;
    }

    get isLoggesIn() {
        return this.loginStatus.asObservable();
    }

    get currentUserName() {
        return this.UserName.asObservable();
    }

    get currentUserId() {
      return this.UserId.asObservable();
  }

    get currentUserRole() {
        return this.UserRole.asObservable();
    }

    getUserInfo() : Observable<User> {
      this.user$ = this.http.get<User>(this.baseUrl + 'GetUserInfo/')
      // if categories cache exists return it
      return this.user$;
  }

  getUserTransactions() {
    return this.http.get<any>(this.baseUrl + 'GetUserTransactions/')
}

getAllUsers() {
  return this.http.get<any>(this.baseUrl + 'GetAllUsers/')
}

  changePersonalInformation(firstName: string, lastName: string, phoneNumber: number, gender: number, birthDate: Date, country: string, idnumber: string) {
    return this.http.post<any>(this.baseUrl + 'ChangePersonalInformation/', {firstName, lastName, phoneNumber,  gender, country, birthDate, idnumber}).pipe(map(result => {
        return result;
    }, error => {
        return error;
    }));
  }

  changePassword(currentPassword: string, newPassword: string) {
    return this.http.post<any>(this.baseUrl + 'ChangePassword/', {currentPassword, newPassword}).pipe(map(result => {
        return result;
    }, error => {
        return error;
    }));
  }

  AddShop(shopName: string, typeOfService: string, shopWebsite: string, shopPhone: string, shopLocation: string, description: string) {
    return this.http.post<any>(this.baseUrl + 'AddShop/', 
    {shopName, typeOfService, shopWebsite,  shopPhone, shopLocation, description}).pipe(map(result => {
        return result;
    }, error => {
        return error;
    }));
  }


}
