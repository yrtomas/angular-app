import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaginatedItems } from '../models/PaginatedItems';


@Injectable()
export class CatalogService {

  constructor(
    private httpClient: HttpClient
  ) { }


  public Get(): Observable<PaginatedItems> {
    return this.httpClient.get<PaginatedItems>(`https://localhost:49165/api/v1/Catalog/items`);
  }

  }
