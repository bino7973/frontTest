import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitComponent } from './Produit/produit/produit.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { ListeComponent } from './Produit/liste/liste/liste.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    ListeComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
      HttpClientModule,
      FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
