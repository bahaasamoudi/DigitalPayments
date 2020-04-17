import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormGroupDirective, NgForm, Validators, AbstractControl, ValidatorFn, FormBuilder } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { AccountService } from '../services/account.service';
import { Router } from '@angular/router';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-sign-up-modal',
  templateUrl: './sign-up-modal.component.html',
  styleUrls: ['./sign-up-modal.component.scss']
})
export class SignUpModalComponent implements OnInit {

  insertForm: FormGroup;
  username: FormControl;
  password: FormControl;
  cpassword: FormControl;
  email: FormControl;
  firstName: FormControl;
  lastName: FormControl;
  phoneNumber: FormControl;
  gender: FormControl;
  invalidRegister: boolean;
  errorList: string[];
  matcher = new MyErrorStateMatcher();

  
  classConfig;
  @Input('config2') set config2(value){
    this.classConfig = value;
  }
  constructor(private fb: FormBuilder, private acct: AccountService, private router: Router ) {
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
      this.username = new FormControl('', [Validators.required]);
      this.password = new FormControl('', [Validators.required]);
      this.cpassword = new FormControl('',[Validators.required, this.MustMatch(this.password)]);
      this.email = new FormControl('', [Validators.required, Validators.email]);
      this.firstName = new FormControl('', [Validators.required]);
      this.lastName = new FormControl('', [Validators.required]);
      this.phoneNumber = new FormControl('', [Validators.required]);
      this.gender = new FormControl('', [Validators.required]);

      this.errorList = [];
      this.insertForm = this.fb.group({
        'username': this.username,
        'password': this.password,
        'cpassword': this.cpassword,
        'email': this.email,
        'firstName': this.firstName,
        'lastName': this.lastName,
        'phoneNumber': this.phoneNumber,
        'gender': this.gender
      });
  }

  
  MustMatch(passwordControl : AbstractControl) : ValidatorFn {
    return (cpasswordControl : AbstractControl) : {[key: string] : boolean } | null   =>  {
      // return null if controls haven't initialised yet
      if(!passwordControl && !cpasswordControl) {
        return null;
      }
      // return null if another validator has already found an error on the matchingControl
      if (cpasswordControl.hasError && !passwordControl.hasError) {
        return null;
      }
      // set error on matchingControl if validation fails
      if(passwordControl.value !== cpasswordControl.value) {
        return { 'mustMatch': true };
      }
      else {
        return null;
      }
    }
  }

  
  onSubmit() {
    let userDetails = this.insertForm.value;
    this.acct.register(userDetails.username, userDetails.password, userDetails.email, userDetails.firstName, userDetails.lastName, 
      userDetails.phoneNumber, "Palestine", +userDetails.gender)
      .subscribe(result => {
        this.router.navigate(['']);
      }, error => {
        this.errorList = [];
        this.invalidRegister = true;
        console.log(userDetails.gender)
        console.log(error)
        for(var i = 0; i < error.error.value.length; i++) {
          this.errorList.push(error.error.value[i]);
        }
      });
}


}




