import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import { ligneDeCom, Commande } from 'src/models/Produits.model';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.page.html',
  styleUrls: ['./commande.page.scss'],
})
export class CommandePage implements OnInit {
  ligneDeCom!:ligneDeCom[]
  commande!:Commande;
  constructor(private cliServ:ClientService,private actRoute: ActivatedRoute) { }

  ngOnInit() {
    const idCommande=+this.actRoute.snapshot.params['id'];
    this.cliServ.oneCommande(idCommande).subscribe(
      commande =>{
        // console.log(commande.client.id);
        this.ligneDeCom=commande.Produits;
        this.commande=commande;
      })
  }

}
