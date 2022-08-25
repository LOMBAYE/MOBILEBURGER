import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { BurgerComponent } from './catalogue/burger/burger.component';
import { MenuComponent } from './catalogue/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogueComponent,
    BurgerComponent,
    MenuComponent,
  ],
  imports: [BrowserModule, 
    IonicModule.forRoot(),
     AppRoutingModule,
     HttpClientModule,
    ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
