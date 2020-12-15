import { Component, OnInit } from '@angular/core';
import { IPaginatedItems } from 'src/app/core/models/IPaginatedItems';
import { CatalogService } from 'src/app/core/services/catalog.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  public catalogItems: IPaginatedItems | undefined;

  constructor(private catalogService: CatalogService) { }

  ngOnInit(): void {
      this.catalogService.Get().subscribe(response => {
        this.catalogItems = response;
      },
      error => {
        console.log(error)
      });
  }

}
