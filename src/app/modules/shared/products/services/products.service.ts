import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { Product } from '../models/product.interface';

@Injectable({
	providedIn: 'root'
})

// Add queries to server placed here just to save time
export class ProductsService {

  constructor(private http: HttpClient) { }

  public loadAllProducts(): Observable<Product[]> {
	  return this.http.get<Product[]>(`${environment.dbUrl}/catalog`);
  }

}
