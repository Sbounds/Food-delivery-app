import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ResHistoryPage } from './res-history.page';
import { DelResAddCompComponent } from '../components/del-res-add-comp/del-res-add-comp.component';
import { DelCartComponent } from '../components/del-cart/del-cart.component';
import { ResCartCompComponent } from '../components/res-cart-comp/res-cart-comp.component';

const routes: Routes = [
  {
    path: '',
    component: ResHistoryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ResHistoryPage, ResCartCompComponent]
})
export class ResHistoryPageModule {}
