import { Component, OnInit ,Inject,Input} from '@angular/core';
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
  errorList: string[];
  invalidLogin: boolean;


  classConfig;
  @Input('config') set config(value){
    this.classConfig = value;
  }
 
   

  constructor(private acct : AccountService,  private router : Router,  private route: ActivatedRoute, private fb: FormBuilder) { 
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
      var myErrors = error.error.value;
      this.invalidLogin = true;
      this.errorList = [];
      for(var i = 0; i < myErrors.length; i++) {
        this.errorList.push(myErrors[i]);
      }
    })
}
  }
