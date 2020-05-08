import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowseShopsComponent } from './browse-shops/browse-shops.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { AccessDeniedComponent } from './components/errors/access-denied/access-denied.component';
import { AuthGuardService } from './guards/auth-duard.service';
import { SignUpModalComponent } from './sign-up-modal/sign-up-modal.component';



const routes: Routes = [
  {path : "", component : HomeComponent},
  {path : "browseshops", component : BrowseShopsComponent},
  {path : "contactus", component : ContactUsComponent},
  {path : "access-denied", component : AccessDeniedComponent},
  {path : "login", component : LoginModalComponent,  canActivate: [AuthGuardService]},
  {path : "signup", component : SignUpModalComponent, canActivate: [AuthGuardService]},
  {path: 'dashboard',loadChildren: () => import('./dashboard/dashboard.module').then(q => q.DashboardModule)
      , canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[BrowseShopsComponent,ContactUsComponent,HomeComponent];