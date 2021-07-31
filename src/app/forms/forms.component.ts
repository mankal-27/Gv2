import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
    this.prod.setData(this.product)
  }
  
  grandTotal = 0 ;
  onSubmit(myform : NgForm){
    this.product.push(
      {
       name: myform.value.itemname,
       unit : myform.value.unit,
       amount : myform.value.amount,
       total : myform.value.unit * myform.value.amount
      })
      //console.log(this.product)
      this.grandTotal = this.product.reduce(function (accumulator, item) {
             let temptotal  = (accumulator + item.total)
             return temptotal;
           }, 0);  
          // console.log(this.grandTotal);
        }
    
        
}
