import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import * as firebase from 'firebase/app'; // required for app->firestore communication
import 'firebase/firestore';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

interface CartItem{
  item_price?: number,
  item_name?: string,
  item_qty?: number,
  item_id?: string,
  item_descritption?: string

}

@Component({
  selector: 'app-cart-total',
  templateUrl: './cart-total.component.html',
  styleUrls: ['./cart-total.component.scss'],
})
export class CartTotalComponent implements OnInit {
  @Input() cID
  constructor(private cs: CartService) { }
  total: number =0;
  list: CartItem [];
  async ngOnInit() {
    this.list = [];
    console.log(this.cID)
    this.cs.getCartTotal(this.cID).subscribe(async total=>
      {

        
        await total;
        console.log(total);
        this.total=total;
          
        
    
      })
  }

}
