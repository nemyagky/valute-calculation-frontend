import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Product } from '../../shared/products/models/product.interface';
import { BasketResult } from '../models/basket-result.interface';

@Injectable({
	providedIn: 'root',
})
export class BasketCalculationService {

	constructor(private http: HttpClient) {
	}

	public calculateResult(products: Product[]): Observable<BasketResult> {
		return this.http.post<BasketResult>(`${environment.serverUrl}/basket-result`, products);
	}
}
