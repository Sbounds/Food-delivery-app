import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/cart.service';


@Component({
  selector: 'app-del-cart',
  templateUrl: './del-cart.component.html',
  styleUrls: ['./del-cart.component.scss'],
})
export class DelCartComponent implements OnInit {
  @Input() cID
  constructor(private cs: CartService) { }
  list=[];
  ngOnInit() {
    
    this.cs.getDelCart(this.cID, this.list).subscribe(citems=>
      {
        this.list=citems;
        console.log(this.list)
    
      })
  }

}
