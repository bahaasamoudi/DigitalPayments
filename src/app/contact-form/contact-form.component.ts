import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AccountService } from '../services/account.service';
import { MessagesService } from '../services/messages.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  
  insertForm: FormGroup;
  name: FormControl;
  email: FormControl;
  subject: FormControl;
  message: FormControl;
  invalidSend: boolean;
  errorList: string[];
  success = false
  
  constructor(private fb: FormBuilder, private messageService: MessagesService) { }

  ngOnInit() {
      this.name = new FormControl('', [Validators.required]);
      this.email = new FormControl('', [Validators.required, Validators.email]);
      this.subject = new FormControl('', [Validators.required]);
      this.message = new FormControl('', [Validators.required]);
      

      this.errorList = [];
      this.insertForm = this.fb.group({
        'name': this.name,
        'email': this.email,
        'subject': this.subject,
        'message': this.message,
      });
  }

 
  onSubmit() {
    let userDetails = this.insertForm.value;
    console.log(userDetails)
    this.messageService.ContactUs(userDetails.name, userDetails.email, userDetails.subject, userDetails.message)
      .subscribe(result => {
        this.invalidSend = false;
        this.insertForm.reset();
      }, error => {
        this.invalidSend = true;
        this.errorList = [];
        var myErrors = error.error.value;
        for(var i = 0; i < myErrors.length; i++) {
          this.errorList.push(myErrors[i]);
        }
      });
}
}