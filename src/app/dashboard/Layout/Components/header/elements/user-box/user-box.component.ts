import {Component, OnInit} from '@angular/core';
import { AuthService } from 'src/app/dashboard/services/auth.service';
import {ThemeOptions} from '../../../../../theme-options';

@Component({
  selector: 'app-user-box',
  templateUrl: './user-box.component.html',
})
export class UserBoxComponent implements OnInit {

  constructor(public globals: ThemeOptions, private authSerive: AuthService) {
  }

  ngOnInit() {
  }

 logout() {
  this.authSerive.logout();
  }
  

}

