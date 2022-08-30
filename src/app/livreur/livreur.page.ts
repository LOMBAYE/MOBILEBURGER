import { Component, OnInit } from '@angular/core';
import { LivreurService } from '../services/livreur.service';
import { Livraison } from 'src/models/Produits.model';
@Component({
  selector: 'app-livreur',
  templateUrl: './livreur.page.html',
  styleUrls: ['./livreur.page.scss'],
})
export class LivreurPage implements OnInit {

livraisons!:Livraison[]
  constructor(private livSer:LivreurService) { }

  ngOnInit() {
    this.livSer.getLivreur(14).subscribe(
      data=>{
        console.log(data);
        this.livraisons = data.livraisons;
      }
      )
  }

}
