import { createSelector } from '@ngrx/store';
import { BasketResult } from '../../../../basket/models/basket-result.interface';
import { Product } from '../../models/product.interface';

export const getProducts = state => state.productsState.products;
export const getAllCatalogProducts = createSelector(getProducts, (products: Product[]) => products);

export const getBasketProducts = state => state.productsState.productsInBasket;
export const getAllBasketProducts = createSelector(getBasketProducts, (products: Product[]) => products);

export const getBasketResult = state => state.productsState.basketResult;
export const basketResult = createSelector(getBasketResult, (result: BasketResult[]) => result);
