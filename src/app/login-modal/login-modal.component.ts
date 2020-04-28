import { Component, OnInit ,Inject,Input} from '@angular/core';

import { UserProfileFormComponent } from '../user-profile-form/user-profile-form.component';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import { NgClass } from '@angular/common';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss'],
  

})
export class LoginModalComponent implements OnInit {

  insertForm : FormGroup;
  Username :  FormControl;
  Password :  FormControl;
  ErrorMessage: string;
  invalidLogin: boolean;


  classConfig;
  @Input('config') set config(value){
    this.classConfig = value;
  }
 
   

  constructor(private acct : AccountService,  private router : Router,  private route: ActivatedRoute, private fb: FormBuilder) { 
    // Get the modal
	var modal = document.getElementById('signin');
	
	// When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
	}
  }
  
  ngOnInit() {
    this.Username = new FormControl('', [Validators.required]);
    this.Password = new FormControl('', [Validators.required]);
    this.insertForm = this.fb.group({
      "Username" : this.Username,
      "Password" : this.Password
    });
  }
  
  onSubmit() {
    let userlogin = this.insertForm.value;
    this.acct.login(userlogin.Username, userlogin.Password).subscribe(result => {
      let token = (<any>result).token;
      this.invalidLogin = false;
      this.router.navigate(['/dashboard'])
    },
    error => {
      this.invalidLogin = true;
      this.ErrorMessage = error.error.loginError;
      console.log(this.ErrorMessage);
    })
}
  }
