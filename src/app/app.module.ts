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
import { PostShopComponent } from './post-shop/post-shop.component';
import { SidebarComponent } from './sidebar/sidebar.component';
///////////////////////////////////////
// import { BrowseShopsComponent } from './browse-shops/browse-shops.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
// import { ContactUsComponent } from './contact-us/contact-us.component';
////////////////////////////////////

import { UserProfileFormComponent } from './user-profile-form/user-profile-form.component';
import { UserSidebarComponent } from './user-sidebar/user-sidebar.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ShopInfoTabComponent } from './shop-info-tab/shop-info-tab.component';
import { ShopModalComponent } from './shop-modal/shop-modal.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgReduxModule } from '@angular-redux/store';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    WrapComponent,
    NavComponent,
    LoginModalComponent,
    SignUpModalComponent,
    PostShopComponent,
    SidebarComponent,
    // BrowseShopsComponent,
    ContactFormComponent,
    // ContactUsComponent,
    UserProfileFormComponent,
    UserSidebarComponent,
    UserProfileComponent,
    DropdownComponent,
    ShopInfoTabComponent,
    ShopModalComponent,
    routingComponents,
    HomeComponent,
    // TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    BrowserAnimationsModule,
    NgReduxModule,    


    HttpClientModule,
 
    
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
