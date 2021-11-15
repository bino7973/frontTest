import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProduitModel} from "../../models/produit-model.class";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor( private httpClient : HttpClient) { }

  ajouterProduit(nouveauProduit : ProduitModel) : Observable<any>{
    let url : string = 'http://localhost:4000/produits';
    return this.httpClient.post(url, nouveauProduit);
  }

  obtenirProduit() : Observable<any>{
    let url : string = 'http://localhost:4000/produits';
    return this.httpClient.get(url);
  }
}
