import { Component, OnInit } from '@angular/core';
import { GserviceService } from '../gservice.service';

@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.css']
})
export class TableRowComponent implements OnInit {

  constructor(
    private prod :GserviceService
  ) { }
  product = new Array
  ngOnInit(): void {

    this.product = this.prod.getData();
  }
  
  Deleteme(){
    console.log("I am deletable")
  }
}
