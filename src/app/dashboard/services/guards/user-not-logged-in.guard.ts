import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserNotLoggedInGuard {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Promise<boolean> {
    return new Promise(resolve => {
      this.auth.User.subscribe(user => {
        if(user) {
          resolve(false);
          this.router.navigate([''])
        } else {
          resolve(true)
        }
      })
    })
  }
}
