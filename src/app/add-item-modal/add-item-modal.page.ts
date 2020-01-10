import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app'; // required for app->firestore communication
import 'firebase/firestore'; // required for app->firestore communication
import { ModalController, NavParams } from '@ionic/angular'
import { Router } from '@angular/router'
import { ResturantService } from '../resturant.service'
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-add-item-modal',
  templateUrl: './add-item-modal.page.html',
  styleUrls: ['./add-item-modal.page.scss'],

})
export class AddItemModalPage implements OnInit {
  itemName: string = ""
  itemPrice: string = ""
  itemDescription: string = ""
  user;
  constructor(public modalController: ModalController, 
    private router: Router, 
    private resSer: ResturantService, 
    private afs: AngularFirestore, 
    private navParams: NavParams) { 
  
      this.user = this.navParams.get('userOb')
      console.log(this.user.res_id)
  
  }
  ngOnInit() {
  }
  async addItem(){
    let db = firebase.firestore();
    const { itemName, itemPrice, itemDescription } = this
    try{
      let id = this.afs.createId();
      db.collection('resturant').doc(this.user.res_id).collection('menuItem').doc(id).set({
        item_name: itemName,
        item_price: itemPrice,
        item_description: itemDescription,
        item_id:id
      });
    } catch(error){
      console.dir(error)
    }
    this.modalController.dismiss();
  }
  dismiss(){
    this.modalController.dismiss();
  }

}
