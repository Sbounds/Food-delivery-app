import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, NavController } from '@ionic/angular';
//import { ModalMenuItemPage } from '../modal-menu-item/modal-menu-item.page';
import { AddItemModalPage } from '../add-item-modal/add-item-modal.page';
import {MenuController } from '@ionic/angular';
import { MenuItemService } from 'src/app/menuItem.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ResturantService } from '../resturant.service';
import { UserService } from '../user.service';
import * as firebase from 'firebase/app'; // required for app->firestore communication
import 'firebase/firestore'; // required for app->firestore communication
import { disableBindings } from '@angular/core/src/render3';
import { UpdateItemPage } from '../update-item/update-item.page';
//import { User } from '../models/user';

interface User{
  user_name?: string,
  user_id?: string,
  res_id?:string,
  user_type?:number
}
@Component({
  selector: 'app-dashboard-res',
  templateUrl: './dashboard-res.page.html',
  styleUrls: ['./dashboard-res.page.scss'],
})
export class DashboardResPage implements OnInit {
  createSuccess = false;
  resId: string = ""
  uid: string = ""
  user:User;
  navController: any

  constructor(public modalController: ModalController, 
    private menu: MenuController, 
    private afs: AngularFirestore, 
    private miData: MenuItemService, 
    public resSer: ResturantService,
    private us: UserService,
    private alert: AlertController,
    private nav: NavController) {
    
  }

 // mil = [];
 misub=[];
 misubCOPY=[];
  
  //subscriptions=[];

  openFirst() {
    this.menu.enable(true, 'rmenu');
    this.menu.toggle('rmenu');

    console.log(this.menu.isOpen());
  }
  async ngOnInit() {
    this.uid = "";
    this.misub = [];
     let s1 = this.us.getCurrentUID().subscribe(uid=>
      {
        console.log(uid);
        this.uid = uid;
        
        this.us.getSingleUser(uid).then(user=>
        {
          this.user = user;
          console.log(this.user);
          //console.log(this.user[0].res_id);
          let s2 = this.resSer.getMenuSubcollection(this.user.res_id, this.misub).subscribe(menuItems=>
          {
            this.misub=menuItems;
            this.misubCOPY=menuItems;
            console.log(this.misub);
          });
         // this.subscriptions.push(s2);
        });
      });
     // this.subscriptions.push(s1);

  }

  initializeItems(){
    this.misub = this.misubCOPY;
  }

  searchItems(event) {
    const searchString = event.target.value;
    this.initializeItems();
    if(!searchString) {
      return;
    }
    
    this.misub=this.misub.filter((v) => {
      if(v.item_name && searchString) {
        if (v.item_name.toLowerCase().indexOf(searchString.toLowerCase()) > -1) {
          return true;
        }
          return false;
      }
    });

    console.log(searchString, this.misub.length);
  }

  async addMenuItem(){
    console.log(this.user.res_id);
    const modalElement = await this.modalController.create({
        component: AddItemModalPage,
        componentProps: {
          userOb: this.user
        }
      });
      await modalElement.present();
  }
 async deleteItem(menId){

    let db = firebase.firestore();
    console.log(menId);
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
                db.collection('resturant').doc(this.user.res_id).collection('menuItem').doc(menId).delete().then(any=>{
                this.ngOnInit();
              });
            }
          }
        ]
      })
      await alert.present();
  }

  async updateItem(menI){
    const modal = await this.modalController.create({
      component: UpdateItemPage,
      componentProps: {
        resId: this.user.res_id,
        menI: menI
      }
    });
    await modal.present();

  }


}



