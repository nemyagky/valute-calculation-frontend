import { createReducer, on } from "@ngrx/store";
import { BasketResult } from "../../../../basket/models/basket-result.interface";
import { Product } from "../../models/product.interface";
import * as ProductsActions from "../actions/products.actions";

// All data placed here just to save time
export interface ProductsState {
  products: Product[];
  productsInBasket: Product[];
  basketResult: BasketResult;
}

export const initialState: ProductsState = {
  products: [],
  productsInBasket: [],
  basketResult: {
    RUB: null,
    EUR: null,
    USD: null,
  },
};

export const productsReducer = createReducer(
  initialState,
  on(ProductsActions.LoadAllProductsSuccess, (state, { products }) => {
    return {
      ...state,
      products,
    };
  }),
  on(ProductsActions.CalculateBasketResultSuccess, (state, { result }) => {
    return {
      ...state,
      basketResult: result,
    };
  }),
  on(ProductsActions.AddProductToBasket, (state, { product }) => {
    return {
      ...state,
      productsInBasket: [...state.productsInBasket, product],
    };
  })
);
