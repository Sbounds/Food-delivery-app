import { Component, OnInit, Input } from '@angular/core';
import { ResturantService } from 'src/app/resturant.service';

@Component({
  selector: 'app-del-res-add-comp',
  templateUrl: './del-res-add-comp.component.html',
  styleUrls: ['./del-res-add-comp.component.scss'],
})
export class DelResAddCompComponent implements OnInit {
  @Input() resID
  constructor(private rs: ResturantService) { }
  res
  async ngOnInit() {
    this.rs.getSingleResturant(this.resID).then(res=>
      {
        this.res = res;
        console.log(this.res.streetAddress);
      })
  }

}
