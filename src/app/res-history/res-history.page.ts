import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { UserService } from '../user.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-res-history',
  templateUrl: './res-history.page.html',
  styleUrls: ['./res-history.page.scss'],
})
export class ResHistoryPage implements OnInit {

  constructor(public cs: CartService,
    public us: UserService,
    public menu: MenuController) { }
uid: string = ""
user
compOrders=[];
openFirst() {
  this.menu.enable(true, 'rmenu');
  this.menu.toggle('rmenu');

  console.log(this.menu.isOpen());
}
async ngOnInit() {
    this.us.getCurrentUID().subscribe(uid=>
      {
        this.uid = uid;
        this.us.getSingleUser(uid).then(user=>
          {
            this.user = user;
            console.log(user.res_id);
            this.cs.getrescomp(this.user.res_id, this.compOrders).subscribe(orders=>
              {
                this.compOrders=orders;
                console.log(orders)
              })
          })
      })
  }

}
