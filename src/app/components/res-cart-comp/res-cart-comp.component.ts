import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-res-cart-comp',
  templateUrl: './res-cart-comp.component.html',
  styleUrls: ['./res-cart-comp.component.scss'],
})
export class ResCartCompComponent implements OnInit {
  @Input() cID
  constructor(private cs: CartService) { }
  list = [];
  ngOnInit() {
    this.list = [];
    this.cs.getItemsCarts(this.cID, this.list).subscribe(citems=>
      {
        this.list=citems;
        console.log(this.list)
    
      })
  }

}
