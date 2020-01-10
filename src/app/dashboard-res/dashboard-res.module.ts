import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DashboardResPage } from './dashboard-res.page';
import { AddItemModalPage } from '../add-item-modal/add-item-modal.page'
import { UpdateItemPage } from '../update-item/update-item.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardResPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DashboardResPage, AddItemModalPage, UpdateItemPage],
  entryComponents: [AddItemModalPage, UpdateItemPage]
})
export class DashboardResPageModule {}
