import { Component, OnInit } from '@angular/core';
import {ProduitModel} from "../../models/produit-model.class";
import {Observable} from "rxjs";
import {ProduitService} from "../../service/Produit/produit.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  produitFormGroup !: FormGroup;

  constructor(private produitService : ProduitService, private formBuilder : FormBuilder, private router : Router) { }

  ngOnInit(): void {
    this.produitFormGroup = this.formBuilder.group({
      title : ['', Validators.required],
      description : ['', Validators.required],
      key : ['', Validators.required],
      valeur : ['', Validators.required]
    });
  }

  ajouterProduitAuServer(){

    let title = this.produitFormGroup.value.title
    let description = this.produitFormGroup.value.description
    let key = this.produitFormGroup.value.key
    let valeur = this.produitFormGroup.value.valeur
    let nouveauProduit  = new ProduitModel(title, description, key, valeur);
    this.produitService.ajouterProduit(nouveauProduit).subscribe((resultat)=>{
      alert("Produit ajouter avec success")
      this.produitFormGroup.reset();
      this.router.navigate(['/liste'])
    }, (erreur)=>{

    })
  }

}
