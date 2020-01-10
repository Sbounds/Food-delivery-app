import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, AlertController, ToastController } from '@ionic/angular';
import { ResturantService } from '../resturant.service';
import * as firebase from 'firebase/app'; // required for app->firestore communication
import 'firebase/firestore';
import { AngularFirestore } from '@angular/fire/firestore';
import { CartService } from '../cart.service';
import { UserService } from '../user.service';
import { query } from '@angular/core/src/render3';
import { async } from 'q';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-view-resturant-modal',
  templateUrl: './view-resturant-modal.page.html',
  styleUrls: ['./view-resturant-modal.page.scss'],
})
export class ViewResturantModalPage implements OnInit {
  resturant
  rid: string = ""
  status: number = 0
  uid: string = ""
  existResOpenCart
  
  existItem
  updatedQty: number;
  
  constructor(
    public modalController: ModalController, 
    public navParams: NavParams,
    private resSer: ResturantService,
    private afs: AngularFirestore,
    private cart: CartService,
    private user: UserService,
    private toast: ToastController
    ) { 
    this.resturant = this.navParams.get('rs')
    console.log(this.resturant)
  }
  menItems = [];
  async ngOnInit() {
    let s2 = this.resSer.getMenuSubcollection(this.resturant.res_id, this.menItems).subscribe(menuItems=>
      {
        this.menItems=menuItems;
        console.log(this.menItems);
      });
  }
  dismiss(){
    this.modalController.dismiss();

  }
  async addToCart(mi){
    let db = firebase.firestore();
    console.log(mi.item_id);
    this.user.getCurrentUID().subscribe(async uid=>
      {
        this.uid = uid;
            var query1 = db.collection('cart').where('res_id', '==', this.resturant.res_id).where('user_id', '==', this.uid).where('status', '==', 0);
            
            const snapshot1 = await query1.get();
            if(!snapshot1.empty){
              //adding to existing cart
                  console.log("in if statement");
                  //let itemId = this.afs.createId()
                  
                  this.cart.getCurCartforRes(this.uid, this.resturant.res_id, this.existResOpenCart).subscribe(async cart=>
                    {
                     this.existResOpenCart = cart;
                      console.log(this.existResOpenCart.cart_id);
                      var query2 = db.collection('cart').doc(this.existResOpenCart.cart_id).collection('items').where('item_id', '==', mi.item_id);
                      const snapshot2 = await query2.get();
                      if(!snapshot2.empty){
                        console.log("in snapsot not empty");
                        console.log(this.existResOpenCart.cart_id);
                        
                          this.cart.getSingleItem(this.existResOpenCart.cart_id, mi.item_id).then(async item=>{
                            //console.log(item);
                            console.log(this.existItem);
                            this.existItem=item;
                            //this.updatedQty= item.item_qty + 1;
                            console.log(this.updatedQty);
                            try{
                                /**/
                                db.collection('cart').doc(this.existResOpenCart.cart_id).collection('items').doc(mi.item_id).update({
                                  item_qty: (this.existItem.item_qty+1)
                                });
                                const toast = await this.toast.create({
                                  message: 'Item added to existing cart',
                                  duration: 1000,
                                  position: 'top'
                                });
                                return await toast.present();
                              }
                              catch{
                                console.log("error");
                              }
                          })
                      }
                      else{
                          try{
                            db.collection('cart').doc(this.existResOpenCart.cart_id).collection('items').doc(mi.item_id).set({
                              item_name: mi.item_name,
                              item_price: mi.item_price,
                              item_description: mi.item_description,
                              item_id: mi.item_id,
                              item_qty: 1
                            })
                            const toast = await this.toast.create({
                              message: 'Item added to existing cart',
                              duration: 1000,
                              position: 'top'
                            });
                            return await toast.present();
                          }
                          catch{
                            console.log("There has been an error");
                          }
                      }
                    })
                }
              else{
                //making a new cart
                console.log("in else statement");
                    let id = this.afs.createId();
                    //let itemId = this.afs.createId();
                    try{
                          db.collection('cart').doc(id).set({
                            user_id: this.uid,
                            cart_id:id,
                            res_id: this.resturant.res_id,
                            status: this.status
                            //total: mi.item_price
                          });
                          db.collection('cart').doc(id).collection('items').doc(mi.item_id).set({
                            item_name: mi.item_name,
                            item_price: mi.item_price,
                            item_description: mi.item_description,
                            item_id: mi.item_id,
                            item_qty: 1
                          });
                          const toast = await this.toast.create({
                            message: 'Item added to new cart',
                            duration: 1000,
                            position: 'top'
                          });
                          return await toast.present();
                        }
                        catch{
                          console.log("error adding")
                        }
                    }
            });
        
       }

}
