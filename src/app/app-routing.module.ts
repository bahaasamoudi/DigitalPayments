import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowseShopsComponent } from './browse-shops/browse-shops.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TestComponent } from './test/test.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HomeComponent } from './home/home.component';
import { UserProfileFormComponent } from './user-profile-form/user-profile-form.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { AccessDeniedComponent } from './components/errors/access-denied/access-denied.component';
// import { LoginModalComponent } from './login-modal/login-modal.component';
// import { SignUpModalComponent } from './sign-up-modal/sign-up-modal.component';


const routes: Routes = [
  {path : "", component : HomeComponent},
  {path : "browseshops", component : BrowseShopsComponent},
  {path : "contactus", component : ContactUsComponent},
  {path : "userprofile", component : UserProfileComponent},
  {path : "access-denied", component : AccessDeniedComponent},

  

  



  
  // {path : "login", component : LoginModalComponent},
  // {path : "signup", component : SignUpModalComponent},
  {path: 'dashboard',loadChildren: () => import('./dashboard/dashboard.module').then(q => q.DashboardModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[BrowseShopsComponent,ContactUsComponent,UserProfileComponent,HomeComponent];