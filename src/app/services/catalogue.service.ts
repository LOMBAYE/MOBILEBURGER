import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Catalogue } from 'src/models/Produits.model';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService implements OnInit{

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    
  }
 cata_url="http://127.0.0.1:8000/api/catalogues"

  getCatalogue():Observable<Catalogue>{
    return this.http.get<Catalogue>(this.cata_url);
   }
}
