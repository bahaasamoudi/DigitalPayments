import { Component, OnInit ,Inject} from '@angular/core';

import { UserProfileFormComponent } from '../user-profile-form/user-profile-form.component';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss'],
  

})
export class LoginModalComponent implements OnInit {
  
  
  constructor() { 
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
  }
  

  }
