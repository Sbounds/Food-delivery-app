import { Component, OnInit, Input } from '@angular/core';
import { ResturantService } from 'src/app/resturant.service';

@Component({
  selector: 'app-res-comp',
  templateUrl: './res-comp.component.html',
  styleUrls: ['./res-comp.component.scss'],
})
export class ResCompComponent implements OnInit {
  @Input() resID
  constructor(private rs: ResturantService) { }
  res
  res_name: string = ""
  ngOnInit() {
    this.rs.getSingleResturant(this.resID).then(res=>
      {
        this.res = res
        this.res_name = res.resturantName;
      })
  }

}
