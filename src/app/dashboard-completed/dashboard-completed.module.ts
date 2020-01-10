import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DashboardCompletedPage } from './dashboard-completed.page';
import { DelCartComponent } from '../components/del-cart/del-cart.component';
import { DelResAddCompComponent } from '../components/del-res-add-comp/del-res-add-comp.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardCompletedPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DashboardCompletedPage, DelCartComponent, DelResAddCompComponent]
})
export class DashboardCompletedPageModule {}
