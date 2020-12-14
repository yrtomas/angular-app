import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { BasketComponent } from './basket/basket.component';



@NgModule({
  declarations: [CatalogComponent, BasketComponent],
  imports: [
    CommonModule
  ]
})
export class MarketplaceModule { }
