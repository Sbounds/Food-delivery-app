import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DashboardDelPage } from './dashboard-del.page';
import { DelCartComponent } from '../components/del-cart/del-cart.component';
import { DelResAddCompComponent } from '../components/del-res-add-comp/del-res-add-comp.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardDelPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DashboardDelPage, DelCartComponent, DelResAddCompComponent]
})
export class DashboardDelPageModule {}
