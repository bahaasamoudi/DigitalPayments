import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up-modal',
  templateUrl: './sign-up-modal.component.html',
  styleUrls: ['./sign-up-modal.component.scss']
})
export class SignUpModalComponent implements OnInit {

  constructor() {
    // Get the modal
    var signUpModal = document.getElementById('signup');
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == signUpModal) {
        signUpModal.style.display = "none";
      }
    }
   }

  ngOnInit() {
  }

}




