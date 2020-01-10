import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CusHistoryPage } from './cus-history.page';
import { CartCompComponent } from '../components/cart-comp/cart-comp.component';
import { CartTotalComponent } from '../components/cart-total/cart-total.component';
import { ResCompComponent } from '../components/res-comp/res-comp.component';

const routes: Routes = [
  {
    path: '',
    component: CusHistoryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CusHistoryPage, CartCompComponent, CartTotalComponent, ResCompComponent]
})
export class CusHistoryPageModule {}
