import { Component, OnInit } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/models/Produits.model';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.page.html',
  styleUrls: ['./authentification.page.scss'],
})
export class AuthentificationPage implements OnInit {
user: User={}
found: boolean = true;
  constructor(private router:Router,private authService: AuthentificationService) { }

  ngOnInit() {
  }

  login(){
    
    this.authService.login(this.user).subscribe(
      value => {
        // {username: 'livreur11@gmail.com', password: 'livreur11'}
        if(value['token']){
          if(this.user.username==='livreur11@gmail.com'){
            this.router.navigateByUrl('/livreur');
          }
          if(this.user.username==='client1@gmail.com'){
            this.router.navigateByUrl('/client');
          }
          localStorage.setItem('token', value['token']);
          // this.router.navigateByUrl('/livreur/'+this.id);
        // console.log(value['token'])
        }else{
        this.found=false;
        }
      })
  }
}
