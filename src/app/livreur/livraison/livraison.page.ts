import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { LivreurService } from 'src/app/services/livreur.service';
import { Commande, Livraison } from 'src/models/Produits.model';

@Component({
  selector: 'app-livraison',
  templateUrl: './livraison.page.html',
  styleUrls: ['./livraison.page.scss'],
})
export class LivraisonPage implements OnInit {
  livraison!:Livraison
  commandes:Commande[]=[];
    livId!:number

  constructor(private actRoute:ActivatedRoute,private http:HttpClient,
    private livServ:LivreurService,private alertController: AlertController) { }

  ngOnInit() {
    this.livId=+this.actRoute.snapshot.params['id'];
    this.livServ.oneLivraison(this.livId).subscribe(
      data =>{
        this.livraison=data;
        console.log(data.commandes);
        
        this.commandes=data.commandes;
      })
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Entrez le code',
      buttons: ['OK'],
      inputs: [
        {
          type: 'number',
          placeholder: 'Code',
          min: 1,
          max: 100,
        },
      ],
    });

    await alert.present();
  }

}
