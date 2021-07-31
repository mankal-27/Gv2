import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GserviceService } from '../gservice.service';

@Component({
  selector: 'app-grandtotal',
  templateUrl: './grandtotal.component.html',
  styleUrls: ['./grandtotal.component.css']
})
export class GrandtotalComponent implements OnInit {

  @Input() grandTotal!: Number | 0;
  

  constructor(private prod:GserviceService) { }
  product = new Array
  ngOnInit(): void {
    this.product = this.prod.getData();
  }


}
