import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livraison, Livreur } from 'src/models/Produits.model';

@Injectable({
  providedIn: 'root'
})
export class LivreurService {

  constructor(private http:HttpClient) { }

  getLivreur(id:number):Observable<Livreur>{
    return this.http.get<Livreur>("http://127.0.0.1:8000/api/livreurs/"+id);
  }
  oneLivraison(id:number):Observable<Livraison>{
    return this.http.get<Livraison>("http://127.0.0.1:8000/api/livraisons/"+id)
  }
 
}
