import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { User } from 'src/models/Produits.model';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService implements OnInit {
currentUser: User;
token: string;

  constructor(private http:HttpClient) { }

  ngOnInit() {

  }
  url="http://127.0.0.1:8000/api/login_check"
  
  login(user: User) {
    return this.http.post("http://127.0.0.1:8000/api/login_check", user);
  }

}
