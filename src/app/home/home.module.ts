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
// import { CataloguePage } from '../catalogue/catalogue.page';
// import { CatalogueComponent } from '../catalogue/catalogue.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
  ],
  declarations: [
    HomePage,
    CatalogueListPage,
    CatalogueComponent,
    BurgerComponent,
    MenuComponent,
  ]
})
export class HomePageModule {}
