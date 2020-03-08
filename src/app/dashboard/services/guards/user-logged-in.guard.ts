import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserLoggedInGuard {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Promise<boolean> {
    return new Promise(resolve => {
      this.auth.User.subscribe(user => {
        if(user) {
          resolve(true);
        } else {
          this.router.navigate(['login'])
          resolve(false)
        }
      })
    })
  }
}
