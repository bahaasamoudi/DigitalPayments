import { Component, OnInit } from '@angular/core';
import { UserProfileFormComponent } from 'src/app/user-profile-form/user-profile-form.component';
import{MatDialog,MatDialogRef} from '@angular/material/dialog';
import { LoginModalComponent } from 'src/app/login-modal/login-modal.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  
  //fileNameDialogRef: MatDialogRef<LoginModalComponent>;
  constructor(public dialog: MatDialog) {

    function myFunction() {
      var x = document.getElementById("navbar");
      if (x.className === "topnav") {
        x.className += " ftco-nav";
      } else {
        x.className = "topnav";
      }
    }
   }

  ngOnInit() {
  }
 
   openLoginDialog(): void {
  this.dialog.open(LoginModalComponent);

 }

 openSignupDialog():void{
  this.dialog.open(UserProfileFormComponent);
 }


 
}
