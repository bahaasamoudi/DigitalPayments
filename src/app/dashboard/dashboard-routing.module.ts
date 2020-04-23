import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {BaseLayoutComponent} from './Layout/base-layout/base-layout.component';
import {PagesLayoutComponent} from './Layout/pages-layout/pages-layout.component';

// DEMO PAGES

// Dashboards

import {AnalyticsComponent} from './DemoPages/Dashboards/analytics/analytics.component';

// Pages


// Elements

import {DropdownsComponent} from './DemoPages/Elements/dropdowns/dropdowns.component';
import {ListGroupsComponent} from './DemoPages/Elements/list-groups/list-groups.component';


// Components


import {ChargeComponent} from './Components/Charge/charge.component';

// Tables


// Widgets

import {ChartBoxes3Component} from './DemoPages/Widgets/chart-boxes3/chart-boxes3.component';

// Forms Elements

import {LayoutComponent} from './DemoPages/Forms/Elements/layout/layout.component';

// Charts

import {ChartjsComponent} from './DemoPages/Charts/chartjs/chartjs.component';
import { ShopInfoTabComponent } from '../shop-info-tab/shop-info-tab.component';
import { MyprofileComponent } from './DemoPages/Elements/myprofile/myprofile.component';
import { ScanComponent } from './Components/scan/scan.component';
import { NotificationsComponent } from './DemoPages/Elements/notifications/notifications.component';
import { UserstransactionComponent } from './Components/userstransaction/userstransaction.component';
import { ScantopurchaseComponent } from './Components/scantopurchase/scantopurchase.component';
import { AddshopComponent } from './Elements/addshop/addshop.component';


const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [

      // Dashboads

      {path: '', component: AnalyticsComponent, data: {extraParameter: 'dashboardsMenu'}},
      {path: 'profile', component: MyprofileComponent , data: {extraParameter: 'dashboardsMenu'}},
      {path: 'addshop', component: AddshopComponent , data: {extraParameter: 'dashboardsMenu'}},
      // Elements

    //  {path: 'elements/dropdowns', component: DropdownsComponent, data: {extraParameter: 'elementsMenu'}},
      
      {path: 'elements/notifications', component: NotificationsComponent, data: {extraParameter: 'elementsMenu'}},
      

      // Components

      {path: 'components/userstransaction', component: UserstransactionComponent , data: {extraParameter: 'dashboardsMenu'}},
      {path: 'components/scantopurchase', component: ScantopurchaseComponent , data: {extraParameter: 'dashboardsMenu'}},
      {path: 'components/charge', component: ChargeComponent, data: {extraParameter: 'componentsMenu'}},
      {path: 'components/scan', component: ScanComponent, data: {extraParameter: 'componentsMenu'}},

      // Widgets

      //{path: 'widgets/chart-boxes-3', component: ChartBoxes3Component, data: {extraParameter: 'pagesMenu3'}},

      // Forms Elements

     // {path: 'forms/layouts', component: LayoutComponent, data: {extraParameter: 'formElementsMenu'}},

      // Charts

      {path: 'charts/chartjs', component: ChartjsComponent, data: {extraParameter: ''}},

    ]

  },
  {
    path: '',
    component: PagesLayoutComponent,
    children: [

      // User Pages

    ]
  },
  {path: '**', redirectTo: ''}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class DashboardRoutingModule {
}
