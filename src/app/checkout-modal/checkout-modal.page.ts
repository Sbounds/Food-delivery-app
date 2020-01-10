import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app'; // required for app->firestore communication
import 'firebase/firestore';
import { UserService } from '../user.service';
import { ModalController, NavParams } from '@ionic/angular';

interface User{
  user_name?: string,
  user_id?: string,
  res_id?:string,
  user_type?: number,
  user_firstName?: string,
  user_lastName?: string,
  contactNumber?: string,
  streetAddress?: string,
  city?: string,
  state?: string,
  zip?: number
}

@Component({
  selector: 'app-checkout-modal',
  templateUrl: './checkout-modal.page.html',
  styleUrls: ['./checkout-modal.page.scss'],
})
export class CheckoutModalPage implements OnInit {
  uid: string = ""
  user: User
  user_firstName: string = ""
  user_lastName: string = ""
  contactNumber: string = ""
  streetAddress: string = ""
  city: string= ""
  state: string = ""
  zipcode: number
  cardfname: string = ""
  cardlname: string = ""
  cardnum: string = ""
  cardcsv: string = ""
  cardexp: string =""
  cardstreet: string = ""
  cardcity: string = ""
  cardstate: string = ""
  cardzip: number
  cid: string = ""


  constructor(private us: UserService,
    private modal: ModalController,
    private param: NavParams) { 
      this.cid = this.param.get('cID')
    }

   

  async ngOnInit() {
    this.uid = "";
     let s1 = this.us.getCurrentUID().subscribe(uid=>
      {
        console.log(uid);
        this.uid = uid;
        
        this.us.getSingleUser(uid).then(user=>
        {
          this.user = user;
          this.user_firstName = this.user.user_firstName;
          this.user_lastName = this.user.user_lastName;
          this.contactNumber = this.user.contactNumber;
          this.streetAddress = this.user.streetAddress;
          this.city= this.user.city;
          this.state = this.user.state;
          this.zipcode = this.user.zip;

          this.cardfname = this.user.user_firstName;
          this.cardlname = this.user.user_lastName;
          this.cardstreet= this.user.streetAddress;
          this.cardcity= this.user.city;
          this.cardstate = this.user.state;
          this.cardzip = this.user.zip;
      
        });
      });
      
  }
  async submit(){
    let db = firebase.firestore();
    console.log(this.cid);
    console.log(this.zipcode);
    try{
      db.collection('cart').doc(this.cid).update({
        status: 1,
        //pay info
        card_num: this.cardnum,
        card_csv: this.cardcsv,
        card_exp: this.cardexp,
        card_fname: this.cardfname,
        card_lname: this.cardlname,
        card_street: this.cardstreet,
        card_city: this.cardcity,
        card_state: this.cardstate,
        card_zip: this.cardzip,
        //delivery info
       cust_fname: this.user_firstName,
        cust_lname: this.user_lastName,
        cust_num: this.contactNumber,
        cust_street: this.streetAddress,
        cust_city: this.city,
        cust_state: this.state,
        cust_zip: this.zipcode,
        created: firebase.firestore.Timestamp.fromDate(new Date())
      })
   }catch{
     console.error("error placing order");
   }
   this.modal.dismiss();
  }
  dismiss(){
    this.modal.dismiss();

  }

}
