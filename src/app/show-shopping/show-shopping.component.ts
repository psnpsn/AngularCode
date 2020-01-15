import { Component, OnInit, Input } from '@angular/core';
import { Produit } from '../model/produit';

@Component({
  selector: 'app-show-shopping',
  templateUrl: './show-shopping.component.html',
  styleUrls: ['./show-shopping.component.css']
})
export class ShowShoppingComponent implements OnInit {

  @Input() prod:Produit;

  constructor() { }

  ngOnInit() {
  }

}
