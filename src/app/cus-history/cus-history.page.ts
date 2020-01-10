import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { UserService } from '../user.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-cus-history',
  templateUrl: './cus-history.page.html',
  styleUrls: ['./cus-history.page.scss'],
})
export class CusHistoryPage implements OnInit {

  constructor(public cs: CartService,
    public us: UserService,
    public menu: MenuController) { }
uid: string = "";
user
compOrders=[];
openFirst() {
  this.menu.enable(true, 'cmenu');
  this.menu.toggle('cmenu');

  console.log(this.menu.isOpen());
}
async ngOnInit() {
    this.us.getCurrentUID().subscribe(uid=>
      {
        this.uid = uid;
        
            this.cs.getCuscomp(this.uid, this.compOrders).subscribe(orders=>
              {
                this.compOrders=orders;
                console.log(orders)
              })
          })
  }

}
