import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { MenuController } from '@ionic/angular';
import { UserService } from '../user.service';
interface Cart{
  cart_id?: string,
  user_id?: string,
  res_id?:string,
  status?: number,
  total?: number
}

@Component({
  selector: 'app-dashboard-completed',
  templateUrl: './dashboard-completed.page.html',
  styleUrls: ['./dashboard-completed.page.scss'],
})
export class DashboardCompletedPage implements OnInit {

  constructor(public cs: CartService,
    public menu: MenuController,
    public us: UserService) { }
  compOrders=[];
  uid: string
  openFirst() {
    this.menu.enable(true, 'dmenu');
    this.menu.toggle('dmenu');

    console.log(this.menu.isOpen());
  }
  async ngOnInit() {
    this.us.getCurrentUID().subscribe(uid=>
      {
        this.uid = uid;
        this.cs.getcomp(uid, this.compOrders).subscribe(orders=>{
          this.compOrders=orders
          console.log(this.compOrders)
        })
      })
    
  }

}
