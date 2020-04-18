import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

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
