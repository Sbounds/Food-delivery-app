import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPagePage } from '../modal-page/modal-page.page';
import { LoginPage } from '../login/login.page';
import { MenuController } from '@ionic/angular';
import { ResturantService } from '../resturant.service';
import { ViewResturantModalPage } from '../view-resturant-modal/view-resturant-modal.page';

import { element } from 'protractor';
import { observable } from 'rxjs';

@Component({
  selector: 'app-dashboard-cust',
  templateUrl: './dashboard-cust.page.html',
  styleUrls: ['./dashboard-cust.page.scss'],
})
export class DashboardCustPage implements OnInit {
  
  
  constructor(public modalController: ModalController,private menu: MenuController, private rsData: ResturantService) { 
    //this.rsData =firebase.database().ref(/resturant);
    
    
  }
  openFirst() {
    this.menu.enable(true, 'cmenu');
    this.menu.toggle('cmenu');

    console.log(this.menu.isOpen());
  }
  rsl = [];
  rslCOPY = [];
  
  ngOnInit() {
    this.rsl=[];
    this.rsData.getResturant(this.rsl).then( list=>
    {
      this.rsl= list;
      this.rslCOPY = list;
     console.log(this.rsl);
    });
    
  }
  initializeItems(){
    this.rsl = this.rslCOPY;
  }
  
  getItems(event) {
    const searchString = event.target.value;
    this.initializeItems();
    if(!searchString) {
      return;
    }
    
    this.rsl=this.rsl.filter((v) => {
      if(v.resturantName && searchString) {
        if (v.resturantName.toLowerCase().indexOf(searchString.toLowerCase()) > -1) {
          return true;
        }
          return false;
      }
    });

    console.log(searchString, this.rsl.length);



    //this.rsl = this.rslCOPY;
    //this.rslCOPY = this.rsl;
    //this.rsl.filter(rs=>{
    //  rs.resturantName.includes(searchString);
    //})
    //Reset items back to all of the items
    // this.initializeItems();
  
    // // set q to the value of the searchbar
    
    //this.ngOnInit();
    //let val = rsl.target.value;
  
    // if (val && val.trim() !== '') {
    //   this.rsl.filter(function(user) {
    //     return user.name.toLowerCase().includes(val.toLowerCase());
    //   });
    // }
  }


  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
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
