import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { UserService } from '../user.service';
import { observable } from 'rxjs';
import { MenuController } from '@ionic/angular';
import * as firebase from 'firebase/app'; // required for app->firestore communication
import 'firebase/firestore';

interface User{
  user_name?: string,
  user_id?: string,
  user_type?:number,
  res_id?: string
}

@Component({
  selector: 'app-res-cart',
  templateUrl: './res-cart.page.html',
  styleUrls: ['./res-cart.page.scss'],
})
export class ResCartPage implements OnInit {

  uid: string = ""
  user: User

  constructor(private cs: CartService,
    private us: UserService,
    private menu: MenuController) { }

  resCart = [];

  async ngOnInit() {
    this.resCart =[];
    this.us.getCurrentUID().subscribe(uid=>
      {
        this.uid = uid;
        console.log(this.uid)
        this.us.getSingleUser(this.uid).then(user=>
          {
            this.user = user;
            console.log(this.user.res_id);
            this.cs.getCurResCarts(this.user.res_id, this.resCart).subscribe(cart=>
              {
                this.resCart = cart;
                console.log(this.resCart);
              })

          })

      })
    
    
  }
  openFirst() {
    this.menu.enable(true, 'rmenu');
    this.menu.toggle('rmenu');

    console.log(this.menu.isOpen());
  }
  async accept(cartID){
    let db = firebase.firestore();
    try{
      db.collection('cart').doc(cartID).update({
        status: 2
      }).then(function(){
        console.log("order accepted")
        
      })
   }catch{
     console.error("error placing order");

   }
   this.ngOnInit();
  }
  async reject(cartID){
    let db = firebase.firestore();
    try{
      db.collection('cart').doc(cartID).update({
        status: 5
      }).then(function(){
        console.log("order denied")
        
      })
   }catch{
     console.error("error placing order");

   }
   this.ngOnInit();

  }

}
