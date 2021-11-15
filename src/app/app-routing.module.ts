import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProduitComponent} from "./Produit/produit/produit.component";

const routes: Routes = [
  {path : 'produit', component : ProduitComponent},
  {path : '', pathMatch : 'full',redirectTo : '/produit'},
  {path : '**', redirectTo : '/produit'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
