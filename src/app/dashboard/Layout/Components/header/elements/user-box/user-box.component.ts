import {Component, OnInit} from '@angular/core';
import {ThemeOptions} from '../../../../../theme-options';
import { AccountService } from 'src/app/services/account.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-box',
  templateUrl: './user-box.component.html',
})
export class UserBoxComponent implements OnInit {

  constructor(private acct : AccountService) { }

  LoginStatus$ : Observable<boolean>;
  UserName$ : Observable<string>;
  ngOnInit() {
    this.LoginStatus$ = this.acct.isLoggesIn;
    this.UserName$ = this.acct.currentUserName;
}

  
  onLogout() {
    this.acct.logout();
  }

}

