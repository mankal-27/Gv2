import { Component, Input, OnInit } from '@angular/core';
import { GserviceService } from '../gservice.service';

@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.css']
})
export class TableRowComponent implements OnInit {

  @Input() grandTotal : any;
  constructor(
    private prod :GserviceService,
  ) { }
  product = new Array
  ngOnInit(): void {

    this.product = this.prod.getData();

  }
  
  Deleteme(element : number){
    const data = this.product
    this.product.splice(element,1);
    console.log(this.grandTotal);

  }
}
