import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommandeDunClient, Commande } from 'src/models/Produits.model';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.page.html',
  styleUrls: ['./client.page.scss'],
})
export class ClientPage implements OnInit {
  commandesDunClient!:CommandeDunClient
  commandes!:Commande[]

  constructor(private cliServ:ClientService,private http:HttpClient) { }

  ngOnInit() {
    this.cliServ.commandesDunClient(2).subscribe(
      res =>{
        // console.log(res);
        this.commandesDunClient = res;
        this.commandes = this.commandesDunClient.commandes;
    })
  }

}
