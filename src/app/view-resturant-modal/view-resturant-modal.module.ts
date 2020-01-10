import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ViewResturantModalPage } from './view-resturant-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ViewResturantModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ViewResturantModalPage]
})
export class ViewResturantModalPageModule {}
