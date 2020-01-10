import { Component, OnInit } from '@angular/core';
import {MenuController } from '@ionic/angular';
import { CartService } from '../cart.service';
import { UserService } from '../user.service';
import * as firebase from 'firebase/app'; // required for app->firestore communication
import 'firebase/firestore';

@Component({
  selector: 'app-dashboard-del',
  templateUrl: './dashboard-del.page.html',
  styleUrls: ['./dashboard-del.page.scss'],
})
export class DashboardDelPage implements OnInit {

  uid: string = ""

  constructor(private menu: MenuController,
    private cs: CartService,
    private us: UserService) { }

    availOrders =[];
    curOrders = [];

  openFirst() {
    this.menu.enable(true, 'dmenu');
    this.menu.toggle('dmenu');

    console.log(this.menu.isOpen());
  }

  async ngOnInit() {
    this.availOrders =[];
    this.cs.getAvailableDel(this.availOrders).subscribe(order=>
      {
        this.availOrders = order;
        console.log(this.availOrders);
      })
    
    this.us.getCurrentUID().subscribe(uid=>
      {
        this.uid = uid;
        this.cs.getAcceptedDel(this.uid, this.curOrders).subscribe(orders=>
          {
            this.curOrders = orders;
          })
      })

  }
  async accept(cartID){
    let db = firebase.firestore();
    try{
      db.collection('cart').doc(cartID).update({
        status: 3,
        del_id: this.uid
      }).then(function(){
        console.log("order accepted")
        
      })
   }catch{
     console.error("error accepting order");
   }
   this.ngOnInit();

  }
  async delivered(cartID){
    let db = firebase.firestore();
    try{
      db.collection('cart').doc(cartID).update({
        status: 4
      }).then(function(){
        console.log("order delivered")
        
      })
   }catch{
     console.error("error delivered order");
   }
   this.ngOnInit();

  }

}
