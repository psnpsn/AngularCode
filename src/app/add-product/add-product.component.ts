import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  name:string;
  desc:string;
  price:number;

  constructor() { }

  ngOnInit() {
  }

  addProduct(f){
    console.log(f);
  }

}
