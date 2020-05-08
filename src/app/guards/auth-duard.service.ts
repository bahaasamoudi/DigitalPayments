import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { AccountService } from '../services/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private acct : AccountService, private router: Router ) { }

    canActivate( route: ActivatedRouteSnapshot, state : RouterStateSnapshot) : Observable<boolean> {
 
        return this.acct.isLoggesIn.pipe(take(1), map((loginStatus : boolean) => {
            const destination: string  = state.url;
            // const categoryId = route.params.id;
            if(destination.includes('/login') || destination.includes('/register')) {
              if(loginStatus) {
                this.router.navigate(['']);
                return false;
              } else {
                return true;
              }
              
            }



            if((destination.includes('/dashboard'))) {
              if(!loginStatus) {
                this.router.navigate(['access-denied']);
                return false;
              }
            
            }


            switch(destination) {
                case '/dashboard/addshop' : {
                // If User Not Logged In And Try To Access Redirect To Login Page
                if(!loginStatus) {
                    this.router.navigate(['access-denied']);
                    return false;
                  } else {
                    if(localStorage.getItem("userRole") === 'user') {
                      return true;
                    } else {
                      this.router.navigate(['access-denied'])
                      return false;
                    }
                
                  }
                 
                }
              default:
                    return true;
            }
        }));
    }



}
