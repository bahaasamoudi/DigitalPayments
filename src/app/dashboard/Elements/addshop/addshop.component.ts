import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AccountService } from 'src/app/services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addshop',
  templateUrl: './addshop.component.html',
  styleUrls: ['./addshop.component.css']
})
export class AddshopComponent implements OnInit {

  shopForm: FormGroup;
  shopName: FormControl;
  typeOfService: FormControl;
  shopWebsite: FormControl;
  shopPhone: FormControl;
  shopLocation: FormControl;
  shopDescription: FormControl;
  invalidAdd = null;
  errorList: string[];

  
  constructor(private acct : AccountService,  private fb: FormBuilder,private router : Router) { 

  }

  ngOnInit() {
     
      this.shopName = new FormControl('', [Validators.required]);
      this.typeOfService = new FormControl('', [Validators.required]);
      this.shopWebsite = new FormControl('', [Validators.required]);
      this.shopPhone = new FormControl('', [Validators.required]);
      this.shopLocation = new FormControl('', [Validators.required]);
      this.shopDescription = new FormControl('', [Validators.required]);
      this.shopForm = this.fb.group({
        'typeOfService': this.typeOfService,
        'shopName': this.shopName,
        'shopWebsite': this.shopWebsite,
        'shopPhone': this.shopPhone,
        'shopLocation': this.shopLocation,
        'shopDescription': this.shopDescription,
      });

   
  }

 


  onSubmit() {
    let formDetails = this.shopForm.value;
    this.acct.AddShop(formDetails.shopName, formDetails.typeOfService, formDetails.shopWebsite, formDetails.shopPhone,
      formDetails.shopLocation, formDetails.shopDescription)
      .subscribe(result => {
          this.invalidAdd = false
          alert("Shop added sucsseffuly, you Will Logout Automaticlly")
          this.acct.logout()
      }, error => {
        console.log(error)
        this.invalidAdd = true
        var myErrors = error.error.value;
      this.errorList = [];
      for(var i = 0; i < myErrors.length; i++) {
        this.errorList.push(myErrors[i]);
      }

      });
}

}
