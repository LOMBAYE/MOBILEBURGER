import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { CatalogueComponent } from '../catalogue/catalogue.component';
import { CatalogueListPage } from '../catalogue-list/catalogue-list.page';
import { BurgerComponent } from '../catalogue/burger/burger.component';
import { MenuComponent } from '../catalogue/menu/menu.component';
import { AuthentificationPage } from '../authentification/authentification.page';
import { IonicHeaderParallaxModule } from 'ionic-header-parallax';
import { AccueilPage } from '../accueil/accueil.page';
// import { CataloguePage } from '../catalogue/catalogue.page';
// import { CatalogueComponent } from '../catalogue/catalogue.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    IonicHeaderParallaxModule,
  ],
  declarations: [
    HomePage,
    CatalogueListPage,
    CatalogueComponent,
    BurgerComponent,
    MenuComponent,
    AuthentificationPage,
    AccueilPage
  ]
})
export class HomePageModule {}
