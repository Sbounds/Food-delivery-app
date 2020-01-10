import { Component, OnInit } from '@angular/core';
import { ModalController, MenuController, AlertController } from '@ionic/angular';
import { ResturantService } from '../resturant.service';
import { UserService } from '../user.service';
import { CartService } from '../cart.service';
import * as firebase from 'firebase/app'; // required for app->firestore communication
import 'firebase/firestore';
import { CheckoutModalPage } from '../checkout-modal/checkout-modal.page'
import { isEmpty } from 'rxjs/operators';
import{ ViewResturantModalPage } from '../view-resturant-modal/view-resturant-modal.page'


interface User{
  user_name?: string,
  user_id?: string,
  user_type?:number
}
interface Cart{
  cart_id?: string,
  user_id?: string,
  res_id?:string,
  status?: number,
  items?: []
}


@Component({
  selector: 'app-cust-cart',
  templateUrl: './cust-cart.page.html',
  styleUrls: ['./cust-cart.page.scss'],
})
export class CustCartPage implements OnInit {

  uid: string = ""
  cid: string = ""
  res


  constructor(public modalController: ModalController,
    private menu: MenuController, 
    private rs: ResturantService,
    private us: UserService,
    private cs: CartService,
    private modal: ModalController,
    private alert: AlertController) { }
    items = [];
    cart= [];
    resNames = [];


  openFirst() {
    this.menu.enable(true, 'cmenu');
    this.menu.toggle('cmenu');

    console.log(this.menu.isOpen());
  }


  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  async ngOnInit() {
     console.log("on cust cart page")
    this.uid = "";
    this.cart = [];
     let s1 = this.us.getCurrentUID().subscribe(uid=>
      {
        console.log(uid);
        this.uid = uid;
          let s2 = this.cs.getCurCarts(this.uid, this.cart).subscribe(async cart=>
          {
            this.cart=cart;
            console.log(this.cart);
            if(this.cart == undefined){
              console.log("in empty group");
            }
            console.log(this.cart.length);
        });
      });

  }

  async checkout(cID){
    const modalElement = await this.modalController.create({
      component: CheckoutModalPage,
      componentProps: {
        cID: cID
      }
    });
    await modalElement.present();
  }
  async viewResturant(rsID){
    this.rs.getSingleResturant(rsID).then(async res=>
      {
        this.res= res;
        console.log(this.res);
        const modalElement = await this.modalController.create({
          component: ViewResturantModalPage,
          componentProps: {
            rs: this.res
          }
        });
        await modalElement.present();

      })
    
  }
  async deleteCart(cID){
    let db = firebase.firestore();
    console.log(cID);
    const alert = await this.alert.create({
        header: 'Warning',
        message: 'Are you sure you want to delete this cart?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel'
          },
          {
              text:'Delete',
              handler: data =>{
                db.collection('cart').doc(cID).delete().then(any=>{
                this.ngOnInit();
              });
            }
          }
        ]
      })
      await alert.present();
  
  }
  

}

