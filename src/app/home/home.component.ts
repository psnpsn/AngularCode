import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products:Produit[];
  constructor(private service:ProductService, private router:Router) { }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts(){
    this.service.getListProduit().subscribe(res=>this.products=res);
  }

  details(){
    this.router.navigate(['product']);
  }

}
