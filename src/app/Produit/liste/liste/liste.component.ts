import { Component, OnInit } from '@angular/core';
import {ProduitService} from "../../../service/Produit/produit.service";

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  listeProduit : any;

  constructor(private produitService : ProduitService) { }

  ngOnInit(): void {
    this.obtenirListeProduit()
  }

  obtenirListeProduit(){
    this.produitService.obtenirProduit().subscribe((resultat)=>{
      this.listeProduit = resultat.produits
      console.log(this.listeProduit)
    }, (erreur)=>{
      console.log(erreur)
    })
  }

}
