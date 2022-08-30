import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LivreurPage } from './livreur.page';

const routes: Routes = [
  {
    path: '',
    component: LivreurPage
  },
  {
    path: 'livraison/:id',
    loadChildren: () => import('./livraison/livraison.module').then( m => m.LivraisonPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LivreurPageRoutingModule {}
