import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasketComponent } from './basket/basket.component';
import { CatalogComponent } from './catalog/catalog.component';
import { MarketplaceComponent } from './marketplace.component';

const routes: Routes = [
      {   
        path: '',
        component: MarketplaceComponent
      }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class MarketplaceRoutingModule { }