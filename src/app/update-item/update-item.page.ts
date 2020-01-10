import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import * as firebase from 'firebase/app'; // required for app->firestore communication
import 'firebase/firestore';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.page.html',
  styleUrls: ['./update-item.page.scss'],
})
export class UpdateItemPage implements OnInit {
item
resId: string = ""
item_name: string = ""
item_price: string = ""
item_description: string = ""
  constructor(
    private modalController: ModalController,
    private navParams: NavParams
  ) { 
    this.resId = this.navParams.get('resId')
    this.item = this.navParams.get('menI')
    this.item_name = this.item.item_name
    this.item_price = this.item.item_price
    this.item_description = this.item.item_description

  }

  ngOnInit() {
  }
  dismiss(){
    this.modalController.dismiss();
  }
  async updateItem(){
    let db = firebase.firestore();
    var itemRef = db.collection('resturant').doc(this.resId).collection('menuItem').doc(this.item.item_id);

// Set the "capital" field of the city 'DC'
    return itemRef.update({
        item_name: this.item_name,
        item_description: this.item_description,
        item_price: this.item_price
    })
    .then(function() {
        console.log("Document successfully updated!");
    })
    .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });
    
    this.modalController.dismiss();
  }
  
}
