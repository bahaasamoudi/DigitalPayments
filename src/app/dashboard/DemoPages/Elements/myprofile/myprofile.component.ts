import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { User } from 'src/app/dashboard/interfaces/user';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/sign-up-modal/sign-up-modal.component';
import { ShopsService } from 'src/app/services/shops.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss']
})
export class MyprofileComponent implements OnInit {
 
  changePasswordForm: FormGroup;
  personalInformationForm: FormGroup;
  ShopInformationForm: FormGroup;

  currentPassword: FormControl;
  newPassword: FormControl;
  confirmNewPassword: FormControl;

  firstName: FormControl;
  lastName: FormControl;
  phoneNumber: FormControl;
  gender: FormControl;
  idnumber: FormControl;
  country: FormControl;
  birthdate: FormControl;
  balance: FormControl;

  shopName: FormControl;
  location: FormControl;
  phone: FormControl;
  typeOfService: FormControl;
  website: FormControl;
  description: FormControl;

  invalidEdit: boolean;
  errorList: string[];
  matcher = new MyErrorStateMatcher();
  showform = false
  genderValue = null

  invalidPersonalInformationChange = null
  invalidPasswordChange = null
  invalidShopChange = null

  username  = null
  email = null
  role = null

  UserRole : string;

  constructor(private acct : AccountService,  private fb: FormBuilder, private shopsService : ShopsService,) { 

  }

  ngOnInit() {

      this.acct.currentUserRole.subscribe(data => {
        this.UserRole = data;
      });


      this.acct.getUserInfo().subscribe(user => {
        this.username = new FormControl(user.username, [Validators.required]);
        this.email = new FormControl(user.email, [Validators.required, Validators.email]);
        this.firstName = new FormControl(user.firstName, Validators.required);
        this.lastName = new FormControl(user.lastName, Validators.required);
        this.phoneNumber = new FormControl(user.phoneNumber, [Validators.required]);
        this.gender = new FormControl(user.gender, [Validators.required]);
        this.balance = new FormControl(user.balance);
        this.idnumber = new FormControl(user.idnumber, [Validators.required]);
        this.country = new FormControl(user.country, [Validators.required]);
        this.birthdate = new FormControl(user.birthdate , [Validators.required]);
        this.genderValue = user.gender
        this.errorList = [];
   

        this.personalInformationForm = this.fb.group({
          'firstName': this.firstName,
          'lastName': this.lastName,
          'gender': this.gender,
          'balance': this.balance,
          'phoneNumber': this.phoneNumber,
          'idnumber': this.idnumber,
          'country': this.country,
          'birthdate': this.birthdate,
        });

        this.username = user.username
        this.email = user.email
        this.role = user.role

        if(this.UserRole == 'shop') {
            this.getShopInformtion();
        } else {
          this.showform = true
        }
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
     let  myform = (<HTMLInputElement>document.getElementById(form));
      var elements = myform.elements;
      for (var i = 0, len = elements.length; i < len; ++i) {
          elements[i].disabled = false;
      }

      (<HTMLInputElement>document.getElementById('balance')).disabled = true;
      (<HTMLInputElement>document.getElementById('no-disabled-pass')).disabled = true


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
    this.acct.changePersonalInformation(userDetails.firstName, userDetails.lastName, userDetails.phoneNumber, userDetails.gender, userDetails.birthdate, userDetails.country, userDetails.idnumber)
      .subscribe(result => {
          this.invalidPersonalInformationChange = false
      }, error => {
        this.invalidPersonalInformationChange = true
        this.errorList = [];
        var myErrors = error.error.value;
      this.errorList = [];
      for(var i = 0; i < myErrors.length; i++) {
        this.errorList.push(myErrors[i]);
      }

      });
}

onSubmitShop() {
  let shopDetails = this.ShopInformationForm.value;
  this.acct.changeShopInformation(shopDetails.shopName, shopDetails.location, shopDetails.phone, shopDetails.typeOfService, shopDetails.website
                        , shopDetails.description)
    .subscribe(result => {
        this.invalidShopChange = false
    }, error => {
      this.invalidShopChange = true
      this.errorList = [];
      var myErrors = error.error.value;
    this.errorList = [];
    for(var i = 0; i < myErrors.length; i++) {
      this.errorList.push(myErrors[i]);
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
      var myErrors = error.error.value;
      this.errorList = [];
      for(var i = 0; i < myErrors.length; i++) {
        this.errorList.push(myErrors[i]);
      }

    });
}

getShopInformtion() {
  this.shopsService.GetShopInformation().subscribe(shop => {

    this.shopName = new FormControl(shop.shopName, [Validators.required]);
    this.location = new FormControl(shop.location, [Validators.required, Validators.email]);
    this.phone = new FormControl(shop.phone, Validators.required);
    this.typeOfService = new FormControl(shop.typeOfService, Validators.required);
    this.website = new FormControl(shop.website, [Validators.required]);
    this.description = new FormControl(shop.description, [Validators.required]);

    this.ShopInformationForm = this.fb.group({
      'shopName': this.shopName,
      'location': this.location,
      'phone': this.phone,
      'typeOfService': this.typeOfService,
      'website': this.website,
      'description': this.description,
    });

    this.showform = true

  }
  )
}


}
