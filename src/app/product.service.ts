import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from './model/produit';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url:string="assets/produit.json";

  constructor(private http:HttpClient) { }

  getListProduit():Observable<Produit[]>{
    return this.http.get<Produit[]>(this.url);
  }
}
