import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalPagePage } from './modal-page.page';
import { ViewResturantModalPage } from '../view-resturant-modal/view-resturant-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ModalPagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalPagePage, ViewResturantModalPage],
  entryComponents: [ViewResturantModalPage]
})
export class ModalPagePageModule {}
