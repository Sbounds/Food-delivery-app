import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { CheckoutModalPage } from '../checkout-modal/checkout-modal.page'

import { CustCartPage } from './cust-cart.page';
import { CartCompComponent } from '../components/cart-comp/cart-comp.component'
import { ResCompComponent } from '../components/res-comp/res-comp.component'
import { ViewResturantModalPage } from '../view-resturant-modal/view-resturant-modal.page'
import { CartTotalComponent } from '../components/cart-total/cart-total.component';

const routes: Routes = [
  {
    path: '',
    component: CustCartPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CustCartPage, CartCompComponent, CheckoutModalPage, ResCompComponent, ViewResturantModalPage, CartTotalComponent],
  entryComponents: [CheckoutModalPage, ViewResturantModalPage]
})
export class CustCartPageModule {}
