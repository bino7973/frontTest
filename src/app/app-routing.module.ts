import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProduitComponent} from "./Produit/produit/produit.component";
import {ListeComponent} from "./Produit/liste/liste/liste.component";

const routes: Routes = [
  {path : 'produit', component : ProduitComponent},
  {path : 'liste', component : ListeComponent},
  {path : '', pathMatch : 'full',redirectTo : '/produit'},
  {path : '**', redirectTo : '/produit'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
