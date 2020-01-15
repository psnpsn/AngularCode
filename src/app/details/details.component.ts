import { Component, OnInit, Input } from '@angular/core';
import { Produit } from '../model/produit';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

@Input() prod:Produit

  constructor() { }

  ngOnInit() {
  }

}
