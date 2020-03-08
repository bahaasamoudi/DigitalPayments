import { Injectable } from '@angular/core';
import { ObservableStore } from '@angular-redux/store';
import {Observable} from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  User: Observable<firebase.User>
  userid: string = ''

  constructor(private fireAuth: AngularFireAuth, private firestore: AngularFirestore, private route: Router) {
    this.User = fireAuth.user;
   }

   signup(email, password, userType, address, location, phoneNumber, typeOfService, website, userImage, shopImage) {
     return new Promise((resolve, reject) => {
       this.fireAuth.auth.createUserWithEmailAndPassword(email, password).then(data => {
          this.addNewUserToUsersColletcion(data.user.uid, userType, address, location, phoneNumber, typeOfService, website, userImage, shopImage);
        resolve();
       }).catch(err => reject(err))
     })
   }

   addNewUserToUsersColletcion(id, user_type, address, location, phoneNumber, typeOfService, website, userImage, shopImage) {
    return this.firestore.doc(`users/${id}`).set({
      user_type,
      registered_date: new Date(),
      address,
      location,
      phone_number: phoneNumber,
      type_of_service: typeOfService,
      website,
      user_image: userImage,
      shop_image: shopImage
      
    });
    
   }

   login(email, password) {
    return this.fireAuth.auth.signInWithEmailAndPassword(email, password).then(() => {
      this.route.navigate(['']);
    })
   }

   logout() {
     return this.fireAuth.auth.signOut().then(() => {
       this.route.navigate(['login']);
     })
   }

}
