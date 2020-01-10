import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ResCartPage } from './res-cart.page';
import { CartCompComponent } from '../components/cart-comp/cart-comp.component'
import { ResCartCompComponent } from '../components/res-cart-comp/res-cart-comp.component'
const routes: Routes = [
  {
    path: '',
    component: ResCartPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ResCartPage, CartCompComponent, ResCartCompComponent]
})
export class ResCartPageModule {}
