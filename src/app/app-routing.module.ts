import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// import { CatalogueComponent } from './catalogue/catalogue.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  // {path: '', redirectTo:'/catalogue',pathMatch: 'full'},
//   {path: 'catalogue', 
//   component:CatalogueComponent
// },
  // {
  //   path: 'connexion',
  //   loadChildren: () => import('./connexion/connexion.module').then( m => m.ConnexionPageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
