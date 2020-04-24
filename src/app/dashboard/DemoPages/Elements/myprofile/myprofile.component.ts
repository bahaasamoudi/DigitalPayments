import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { User } from 'src/app/dashboard/interfaces/user';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/sign-up-modal/sign-up-modal.component';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss']
})
export class MyprofileComponent implements OnInit {
 
  insertForm: FormGroup;
  currentPassword: FormControl;
  password: FormControl;
  cpassword: FormControl;
  email: FormControl;
  firstName: FormControl;
  lastName: FormControl;
  phoneNumber: FormControl;
  gender: FormControl;
  balance: FormControl;
  invalidEdit: boolean;
  errorList: string[];
  matcher = new MyErrorStateMatcher();
  showform = false
  username: FormControl;


  constructor(private acct : AccountService,  private fb: FormBuilder) { 

  }

  ngOnInit() {
      this.acct.getUserInfo().subscribe(user => {

        this.username = new FormControl(user.username, [Validators.required]);
        // this.cpassword = new FormControl('',[Validators.required, this.MustMatch(this.password)]);
        this.email = new FormControl(user.email, [Validators.required, Validators.email]);
        this.firstName = new FormControl(user.firstName, [Validators.required]);
        this.lastName = new FormControl(user.lastName, [Validators.required]);
        this.phoneNumber = new FormControl(user.phoneNumber, [Validators.required]);
        this.gender = new FormControl(user.gender, [Validators.required]);
        this.balance = new FormControl(user.balance);

        this.errorList = [];
        this.insertForm = this.fb.group({
          'username': this.username,
          'password': this.password,
          'cpassword': this.cpassword,
          'email': this.email,
          'firstName': this.firstName,
          'lastName': this.lastName,
          'phoneNumber': this.phoneNumber,
          'gender': this.gender,
          'balance': this.balance
        });

        this.showform = true

      })


   
  }


}
