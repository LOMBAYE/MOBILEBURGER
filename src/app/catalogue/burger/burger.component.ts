import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Burger } from 'src/models/Produits.model';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.scss'],
})
export class BurgerComponent implements OnInit {

  @Input('produitRecu') produit!:Burger;
  constructor(private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
   
  }

  transform(params: string){
    return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64, '+params);
  }
}
