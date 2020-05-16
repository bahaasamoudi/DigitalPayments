import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgReduxModule} from '@angular-redux/store';
import {NgRedux, DevToolsExtension} from '@angular-redux/store';
import {rootReducer, ArchitectUIState} from './ThemeOptions/store';
import {ConfigActions} from './ThemeOptions/store/config.actions';
import {LoadingBarRouterModule} from '@ngx-loading-bar/router';
import {MatTabsModule} from '@angular/material/tabs';


import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
// import {AppComponent} from './app.component';

// BOOTSTRAP COMPONENTS

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {PERFECT_SCROLLBAR_CONFIG} from 'ngx-perfect-scrollbar';
import {PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';
import {ChartsModule} from 'ng2-charts';

// LAYOUT

import {BaseLayoutComponent} from './Layout/base-layout/base-layout.component';
import {PagesLayoutComponent} from './Layout/pages-layout/pages-layout.component';


// HEADER

import {HeaderComponent} from './Layout/Components/header/header.component';
import {SearchBoxComponent} from './Layout/Components/header/elements/search-box/search-box.component';
import {UserBoxComponent} from './Layout/Components/header/elements/user-box/user-box.component';

// SIDEBAR

import {SidebarComponent} from './Layout/Components/sidebar/sidebar.component';
import {LogoComponent} from './Layout/Components/sidebar/elements/logo/logo.component';

// FOOTER

import {FooterComponent} from './Layout/Components/footer/footer.component';

// DEMO PAGES

// Dashboards

import {AnalyticsComponent} from './DemoPages/Dashboards/analytics/analytics.component';

// Pages

// Elements

import {DropdownsComponent} from './DemoPages/Elements/dropdowns/dropdowns.component';
import {ListGroupsComponent} from './DemoPages/Elements/list-groups/list-groups.component';


import {MyprofileComponent} from './DemoPages/Elements/myprofile/myprofile.component';

// Components


import {ChargeComponent} from './Components/Charge/charge.component';
import {ScanComponent} from './Components/scan/scan.component';



// Widgets

import {ChartBoxes3Component} from './DemoPages/Widgets/chart-boxes3/chart-boxes3.component';

// Forms Elements

import {LayoutComponent} from './DemoPages/Forms/Elements/layout/layout.component';

// Charts

import {ChartjsComponent} from './DemoPages/Charts/chartjs/chartjs.component';

// Chart.js Examples

import {LineChartComponent} from './DemoPages/Charts/chartjs/examples/line-chart/line-chart.component';
import {BarChartComponent} from './DemoPages/Charts/chartjs/examples/bar-chart/bar-chart.component';
import {ScatterChartComponent} from './DemoPages/Charts/chartjs/examples/scatter-chart/scatter-chart.component';
import {RadarChartComponent} from './DemoPages/Charts/chartjs/examples/radar-chart/radar-chart.component';
import {PolarAreaChartComponent} from './DemoPages/Charts/chartjs/examples/polar-area-chart/polar-area-chart.component';
import {BubbleChartComponent} from './DemoPages/Charts/chartjs/examples/bubble-chart/bubble-chart.component';
import {DynamicChartComponent} from './DemoPages/Charts/chartjs/examples/dynamic-chart/dynamic-chart.component';
import {DoughnutChartComponent} from './DemoPages/Charts/chartjs/examples/doughnut-chart/doughnut-chart.component';
import {PieChartComponent} from './DemoPages/Charts/chartjs/examples/pie-chart/pie-chart.component';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NotificationsComponent } from './DemoPages/Elements/notifications/notifications.component';
import { PageTitleComponent } from './layout/components/page-title/page-title.component';
import { ScantopurchaseComponent } from './Components/scantopurchase/scantopurchase.component';
import { UserstransactionComponent } from './Components/userstransaction/userstransaction.component';
import { AddshopComponent } from './Elements/addshop/addshop.component';
import { UsersComponent } from './Components/users/users.component';
import { SitestatsComponent } from './Components/sitestats/sitestats.component';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import { MessagesComponent } from './messages/messages.component';
import { BillsComponent } from './bills/bills.component';



const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [

    // LAYOUT
  
    DashboardComponent,
    BaseLayoutComponent,
    PagesLayoutComponent,
    
   
    // HEADER

    HeaderComponent,
    SearchBoxComponent,
    UserBoxComponent,

    // SIDEBAR

    SidebarComponent,
    LogoComponent,

    // FOOTER

    FooterComponent,
    
    // DEMO PAGES

    // Dashboards

    AnalyticsComponent,

    // User Pages

    // Elements

 
    
    ListGroupsComponent,
  

    // Components

    
    ChargeComponent,
    ScanComponent,
    MyprofileComponent,

    
    // Dashboard Boxes

    ChartBoxes3Component,

    // Form Elements

    LayoutComponent,

    // CHARTS

    ChartjsComponent,

    // Chart.js Examples

    LineChartComponent,
    BarChartComponent,
    DoughnutChartComponent,
    RadarChartComponent,
    PieChartComponent,
    PolarAreaChartComponent,
    DynamicChartComponent,
    BubbleChartComponent,
    ScatterChartComponent,
    DropdownsComponent,
    NotificationsComponent,
    PageTitleComponent,
    ScantopurchaseComponent,
    UserstransactionComponent,
    AddshopComponent,
    UsersComponent,
    SitestatsComponent,
    MessagesComponent,
    BillsComponent,
  ],
  imports: [
  
    DashboardRoutingModule,
    CommonModule,
    LoadingBarRouterModule,
    // AngularFontAwesomeModule,
    PerfectScrollbarModule,
    NgbModule,
   // Charts
  
   ChartsModule,
   MatTabsModule,
   MatTableModule,
   MatFormFieldModule,
   MatPaginatorModule        ,
   MatInputModule,
    // Angular Bootstrap Components

    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [
    {
      provide:
      PERFECT_SCROLLBAR_CONFIG,
      // DROPZONE_CONFIG,
      useValue:
      DEFAULT_PERFECT_SCROLLBAR_CONFIG,
      // DEFAULT_DROPZONE_CONFIG,
    },
    ConfigActions,
  ],
  bootstrap: [DashboardComponent]
})

export class DashboardModule {
  constructor(private ngRedux: NgRedux<ArchitectUIState>,
              private devTool: DevToolsExtension) {

    this.ngRedux.configureStore(
      rootReducer,
      {} as ArchitectUIState,
      [],
      [devTool.isEnabled() ? devTool.enhancer() : f => f]
    );

  }
}
