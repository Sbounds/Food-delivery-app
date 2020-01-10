import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import * as firebase from 'firebase/app'; // required for app->firestore communication
import 'firebase/firestore'; 
import { AlertController, ToastController } from '@ionic/angular';

interface Cart{
  cart_id?: string,
  user_id?: string,
  res_id?:string,
  status?: number,
  total?: number
}

@Component({
  selector: 'app-cart-comp',
  templateUrl: './cart-comp.component.html',
  styleUrls: ['./cart-comp.component.scss'],
})
export class CartCompComponent implements OnInit {
  @Input() cID
  constructor(private cs: CartService,
    private alert: AlertController,
    private toast: ToastController) { }
  list = [];
  qty: number;
  cart: Cart
  lineTotal: number
  async ngOnInit( ) {
    this.list = [];
    console.log(this.cID)
    this.cs.getItemsCarts(this.cID, this.list).subscribe(citems=>
      {
        this.list=citems;
        console.log(this.list)
    
      })
  }

  async delete(itemID){
    let db = firebase.firestore();
    console.log(itemID);
    const alert = await this.alert.create({
        header: 'Warning',
        message: 'Are you sure you want to delete this item?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel'
          },
          {
              text:'Delete',
              handler: data =>{
                db.collection('cart').doc(this.cID).collection('items').doc(itemID).delete().then(any=>{
                this.ngOnInit();
              });
            }
          }
        ]
      })
      await alert.present();
    
  }

  async increase(itemID, qty){
    this.qty = qty+1;
    let db = firebase.firestore();
    this.cs.getCart(this.cID).subscribe(cart=>{
      this.cart= cart;
    })
    console.log(this.cart.total)
   /* db.collection('cart').doc(this.cID).update({
      total: (this.cart.total+itemID.item_price)
    });*/
    console.log(this.cID.total+itemID.item_price)
    db.collection('cart').doc(this.cID).collection('items').doc(itemID).update({
      item_qty: this.qty
    });
    this.ngOnInit();

  }
  async decrease(itemID, qty){
    this.qty = qty-1;
    console.log(this.qty);
    let db = firebase.firestore();
    if(this.qty>0){
      /*db.collection('cart').doc(this.cID).update({
        total: (this.cID.total-itemID.item_price)
      });*/
      db.collection('cart').doc(this.cID).collection('items').doc(itemID).update({
        item_qty: this.qty
      });
      this.ngOnInit();
    }
    else{
      const toast = await this.toast.create({
        message: 'Cannot decrease!',
        duration: 1000,
        position: 'top'
      });
      return await toast.present()
    }
  }

}