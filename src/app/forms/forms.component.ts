import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Item } from '../module/productitem';
import { GserviceService } from '../gservice.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor(
    private prod:GserviceService
  ) {

   }
  product = new Array
  ngOnInit(): void {
    this.prod.setData(this.product);
  }
  
 
  onSubmit(myform : NgForm){
    this.product.push(
      {name: myform.value.itemname,
       unit : myform.value.unit,
       amount : myform.value.amount,
       total : myform.value.unit * myform.value.amount
      })
      console.log(this.product)

  }
  
}
