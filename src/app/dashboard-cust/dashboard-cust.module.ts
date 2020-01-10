import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DashboardCustPage } from './dashboard-cust.page';
import { ModalPagePage } from '../modal-page/modal-page.page';
import { ViewResturantModalPage } from '../view-resturant-modal/view-resturant-modal.page';


const routes: Routes = [
  {
    path: '',
    component: DashboardCustPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DashboardCustPage, ModalPagePage, ViewResturantModalPage],
  entryComponents: [ModalPagePage, ViewResturantModalPage]
})
export class DashboardCustPageModule {}
