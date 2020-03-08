import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-user-profile-form',
  templateUrl: './user-profile-form.component.html',
  styleUrls: ['./user-profile-form.component.css']
})
export class UserProfileFormComponent implements OnInit {

  // disableTextbox : boolean = true
  constructor() { 
  }
  toggleDis(){
    this.disableTextbox = !this.disableTextbox;
  }
  disableTextbox =  false;

toggleDisable() {
    this.disableTextbox = !this.disableTextbox;
}

  ngOnInit() {
  }

}
