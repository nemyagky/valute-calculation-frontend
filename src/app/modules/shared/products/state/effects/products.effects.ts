import { BasketResult } from '../../../../basket/models/basket-result.interface';
import { BasketCalculationService } from '../../../../basket/services/basket-calculation.service';
import { Product } from '../../models/product.interface';
import { ProductsService } from '../../services/products.service';
import { CalculateBasketResult } from '../actions/products.actions';
import * as ProductsActions from '../actions/products.actions';
import { Injectable } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { Actions, ofType, createEffect } from '@ngrx/effects';

@Injectable()
export class ProductsEffects {
	private loadAllProducts$ = createEffect(() =>
		this.actions$.pipe(
			ofType(ProductsActions.LoadAllProducts),
			switchMap(() =>
				this.productsService.loadAllProducts().pipe(
					map((products: Product[]) => {
						return ProductsActions.LoadAllProductsSuccess({ products });
					}),
				),
			),
		),
	);

	private calculateBasketResult$ = createEffect(() =>
		this.actions$.pipe(
			ofType(ProductsActions.CalculateBasketResult),
			switchMap((action) =>
				this.basketCalculationService.calculateResult(action.products).pipe(
					map((result: BasketResult) => {
						return ProductsActions.CalculateBasketResultSuccess({result});
					}),
				),
			),
		),
	);

	constructor(private actions$: Actions,
				private productsService: ProductsService,
				private basketCalculationService: BasketCalculationService) {
	}
}
