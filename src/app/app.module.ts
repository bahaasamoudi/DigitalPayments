import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
// import { TestComponent } from './test/test.component';
import { FooterComponent } from './layout/footer/footer.component';
import { WrapComponent } from './layout/wrap/wrap.component';
import { NavComponent } from './layout/nav/nav.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { SignUpModalComponent } from './sign-up-modal/sign-up-modal.component';
import { SidebarComponent } from './sidebar/sidebar.component';
///////////////////////////////////////
// import { BrowseShopsComponent } from './browse-shops/browse-shops.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
// import { ContactUsComponent } from './contact-us/contact-us.component';
////////////////////////////////////


import { DropdownComponent } from './dropdown/dropdown.component';
import { ShopInfoTabComponent } from './shop-info-tab/shop-info-tab.component';
import { ShopModalComponent } from './shop-modal/shop-modal.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';

import { NgReduxModule } from '@angular-redux/store';
import{RouterModule} from '@angular/router';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AccessDeniedComponent } from './components/errors/access-denied/access-denied.component';
import { AuthGuardService } from './guards/auth-duard.service';
import { JwtInterceptor } from './helpers/Jwt.Interceptor';
import {MatTableModule} from '@angular/material/table';
import { JwPaginationComponent } from 'jw-angular-pagination';







@NgModule({
  declarations: [
    AppComponent,
  
    FooterComponent,
    WrapComponent,
    NavComponent,
   
    LoginModalComponent,
    SignUpModalComponent,
    SidebarComponent,
    // BrowseShopsComponent,
    ContactFormComponent,
    DropdownComponent,
    ShopInfoTabComponent,
    ShopModalComponent,
    routingComponents,
    HomeComponent,
    AccessDeniedComponent,
    JwPaginationComponent
    
    // TestComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    MatTabsModule,
    MatTableModule,
    AppRoutingModule,
    
    BrowserAnimationsModule,
    NgReduxModule,    
   RouterModule,

    HttpClientModule,
  
    MatDialogModule,
    MatButtonModule,
    FontAwesomeModule,
    MatTabsModule,
   
    

    
    ],
  entryComponents:[ LoginModalComponent],
  providers: [
    AuthGuardService,{provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
