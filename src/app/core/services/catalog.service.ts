import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPaginatedItems } from '../models/IPaginatedItems';


@Injectable()
export class CatalogService {

  constructor(
    private httpClient: HttpClient
  ) { }


  public Get(): Observable<IPaginatedItems> {
    return this.httpClient.get<IPaginatedItems>(`http://localhost:49157api/v1/Catalog/items`);
  }

  }
