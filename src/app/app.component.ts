import { Component } from '@angular/core';
import { UserProfileFormComponent } from './user-profile-form/user-profile-form.component';
import{MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dig-Pay-Pro';

  constructor(public dialog: MatDialog){}
  openDialog(): void {
    this.dialog.open(UserProfileFormComponent);

 

 

 }
}