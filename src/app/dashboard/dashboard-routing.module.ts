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
import { UsersComponent } from './Components/users/users.component';
import { SitestatsComponent } from './Components/sitestats/sitestats.component';
import { AuthGuardService } from '../guards/auth-duard.service';



const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {path: '', component: AnalyticsComponent, data: {extraParameter: 'dashboardsMenu'}},
      {path: 'profile', component: MyprofileComponent , data: {extraParameter: 'dashboardsMenu'}},
      {path: 'addshop', component: AddshopComponent , data: {extraParameter: 'dashboardsMenu'}, canActivate : [AuthGuardService]},
      {path: 'elements/notifications', component: NotificationsComponent, data: {extraParameter: 'elementsMenu'}},
      {path: 'components/userstransaction', component: UserstransactionComponent , data: {extraParameter: 'dashboardsMenu'}},
      {path: 'scantopurchase', component: ScantopurchaseComponent , data: {extraParameter: 'dashboardsMenu'}},
      {path: 'charge', component: ChargeComponent, data: {extraParameter: 'componentsMenu'}},
      {path: 'scan', component: ScanComponent, data: {extraParameter: 'componentsMenu'}},
      {path: 'charts/chartjs', component: ChartjsComponent, data: {extraParameter: ''}},
      {path: 'userstransaction', component: UserstransactionComponent, data: {extraParameter: ''}},
      {path: 'scantopurchase', component: ScantopurchaseComponent, data: {extraParameter: ''}},
      {path: 'users', component: UsersComponent, data: {extraParameter: ''}},
      {path: 'sitestats', component: SitestatsComponent, data: {extraParameter: ''}},


    ]

  },
  {
    path: '',
    component: PagesLayoutComponent,
    children: [
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
