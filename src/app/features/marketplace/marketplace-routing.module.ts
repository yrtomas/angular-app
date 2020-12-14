import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasketComponent } from './basket/basket.component';
import { CatalogComponent } from './catalog/catalog.component';

const routes: Routes = [
      {   
        path: 'catalog',
        component: CatalogComponent
      },
      {
        path: 'basket',
        component: BasketComponent
      }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class MarketplaceRoutingModule { }