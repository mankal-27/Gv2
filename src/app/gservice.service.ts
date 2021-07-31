import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GserviceService {
  sharedProduct = new Array;


  constructor() { }
  setData(data: any[], ){

    this.sharedProduct = data;


  }

  getData(){
    
    return this.sharedProduct ;
  }
}
