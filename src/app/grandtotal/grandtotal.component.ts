import { Component, OnInit } from '@angular/core';
import { GserviceService } from '../gservice.service';

@Component({
  selector: 'app-grandtotal',
  templateUrl: './grandtotal.component.html',
  styleUrls: ['./grandtotal.component.css']
})
export class GrandtotalComponent implements OnInit {

  constructor(private prod:GserviceService) { }
  product = new Array
  ngOnInit(): void {
    this.product = this.prod.getData();
  }


}
