import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { User } from 'src/app/dashboard/interfaces/user';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/sign-up-modal/sign-up-modal.component';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss']
})
export class MyprofileComponent implements OnInit {
 
  changePasswordForm: FormGroup;
  personalInformationForm: FormGroup;
  currentPassword: FormControl;
  newPassword: FormControl;
  confirmNewPassword: FormControl;
  firstName: FormControl;
  lastName: FormControl;
  phoneNumber: FormControl;
  gender: FormControl;
  balance: FormControl;
  invalidEdit: boolean;
  errorList: string[];
  matcher = new MyErrorStateMatcher();
  showform = false
  genderValue = null
  invalidPersonalInformationChange = null
  invalidPasswordChange = null
  username  = null
  email = null

  
  constructor(private acct : AccountService,  private fb: FormBuilder) { 

  }

  ngOnInit() {
      this.acct.getUserInfo().subscribe(user => {
        this.username = new FormControl(user.username, [Validators.required]);
        this.email = new FormControl(user.email, [Validators.required, Validators.email]);
        this.firstName = new FormControl(user.firstName, Validators.required);
        this.lastName = new FormControl(user.lastName, Validators.required);
        this.phoneNumber = new FormControl(user.phoneNumber, [Validators.required]);
        this.gender = new FormControl(user.gender, [Validators.required]);
        this.balance = new FormControl(user.balance, [Validators.required]);
        this.genderValue = user.gender
        this.errorList = [];
   

        this.personalInformationForm = this.fb.group({
          'firstName': this.firstName,
          'lastName': this.lastName,
          'gender': this.gender,
          'balance': this.balance,
          'phoneNumber': this.phoneNumber,
        });

        this.username = user.username
        this.email = user.email
        this.showform = true

      })

      this.currentPassword = new FormControl('', [Validators.required]);
      this.newPassword = new FormControl('', [Validators.required]);
      this.confirmNewPassword = new FormControl('', [Validators.required,   this.MustMatch(this.newPassword)]);
      this.changePasswordForm = this.fb.group({
        'currentPassword': this.currentPassword,
        'newPassword': this.newPassword,
        'confirmNewPassword': this.confirmNewPassword,
      });

   
  }

  enableInputs(form) {
    var form = document.getElementById(form);
      var elements = form.elements;
      for (var i = 0, len = elements.length; i < len; ++i) {
          elements[i].disabled = false;
      }
      document.getElementById('balance').disabled = true
      document.getElementById('no-disabled-pass').disabled = true
      document.getElementById('no-disabled-pers').disabled = true


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

  onSubmitPersonal() {
    let userDetails = this.personalInformationForm.value;
    this.acct.changePersonalInformation(userDetails.firstName, userDetails.lastName, userDetails.phoneNumber, userDetails.gender)
      .subscribe(result => {
          this.invalidPersonalInformationChange = false
      }, error => {
        this.invalidPersonalInformationChange = true
        this.errorList = [];
        var myErrors = error.error.errors
        for(var key in myErrors) {
          this.errorList.push(myErrors[key])
        }

      });
}
onSubmitPasswordChange() {
  let userDetails = this.changePasswordForm.value;
  this.acct.changePassword(userDetails.currentPassword, userDetails.newPassword )
    .subscribe(result => {
        this.invalidPasswordChange = false
    }, error => {
      this.invalidPasswordChange = true
      this.errorList = [];
      var myErrors = error.error.errors
      if(myErrors != null && myErrors != undefined){
      for(var key in myErrors) {
        console.log("1", error)
        for(var i = 0; i < myErrors[key].length; i++) {
          this.errorList.push(myErrors[key][i])
        }
      }
    } else {
      console.log("2", error)
      for(var key in error.error) {
        for(var i = 0; i < error.error[key].length; i++) {
          this.errorList.push(error.error[key][i])
        }
        
      }
     
    }

    });
}
}
