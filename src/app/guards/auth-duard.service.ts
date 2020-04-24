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
            if((destination.includes('/dashboard'))) {
              if(!loginStatus) {
                this.router.navigate(['access-denied']);
                return false;
              } else {
                return true;
              }

            }
            // switch(destination) {
            //     case '/dashboard/' : {
            //     // If User Not Logged In And Try To Access Redirect To Login Page
            //     if(!loginStatus) {
            //         this.router.navigate(['access-denied']);
            //         return false;
            //       } else {
            //         return true;
            //       }
            //         // if(localStorage.getItem("userRole") === 'Admin') {
            //         //     return true;
            //         // } else {
            //         //   this.router.navigate(['access-denied'])
            //         //   return false;
            //         // }
            //     }
            //   default:
            //         return false;
            // }
        }));
    }



}
