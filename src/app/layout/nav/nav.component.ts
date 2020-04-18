import { Component, OnInit ,Input} from '@angular/core';
import { UserProfileFormComponent } from 'src/app/user-profile-form/user-profile-form.component';
import{MatDialog,MatDialogRef} from '@angular/material/dialog';
import { LoginModalComponent } from 'src/app/login-modal/login-modal.component';
import { AccountService } from 'src/app/services/account.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  
  config;
  send(){
     this.config = true;
  }

  config2;
  func(){
     this.config2 = true;
  }
 
  
  
  
  
  //fileNameDialogRef: MatDialogRef<LoginModalComponent>;

  constructor(public dialog: MatDialog, private acct : AccountService) {
 
 
   
    function myFunction() {
      var x = document.getElementById("navbar");
      if (x.className === "topnav") {
        x.className += " ftco-nav";
      } else {
        x.className = "topnav";
      }
    }
   }
  
   LoginStatus$ : Observable<boolean>;
   UserName$ : Observable<string>;
 

  ngOnInit() {
    this.LoginStatus$ = this.acct.isLoggesIn;
    this.UserName$ = this.acct.currentUserName;
  }
 
   openLoginDialog(): void {
  this.dialog.open(LoginModalComponent);

 }

 openSignupDialog():void{
  this.dialog.open(UserProfileFormComponent);
 }




 
}
