import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ViewResturantModalPage } from '../view-resturant-modal/view-resturant-modal.page';

@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.page.html',
  styleUrls: ['./modal-page.page.scss'],
})
export class ModalPagePage implements OnInit {
  val;
  resList
  constructor(public modalController: ModalController, public navParams: NavParams) { 
    this.val = this.navParams.get('value');
    this.resList = this.navParams.get('resList')
  }
  ngOnInit() {
  }
  dismiss(){
    this.modalController.dismiss();

  }
  async viewResturant(rs){
    const modalElement = await this.modalController.create({
      component: ViewResturantModalPage,
      componentProps: {
        rs: rs
      }
    });
    await modalElement.present();
  }

}
