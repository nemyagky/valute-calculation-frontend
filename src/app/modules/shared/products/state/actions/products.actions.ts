import { createAction, props } from "@ngrx/store";
import { BasketResult } from "../../../../basket/models/basket-result.interface";
import { Product } from "../../models/product.interface";

// All actions placed here just to save time
export const LoadAllProducts = createAction(
  "[Catalog Component] Load Products"
);
export const LoadAllProductsSuccess = createAction(
  "[Catalog Component] Load Products Success",
  props<{ products: Product[] }>()
);
export const AddProductToBasket = createAction(
  "[Catalog Component] Add Product To Basket",
  props<{ product: Product }>()
);
export const CalculateBasketResult = createAction(
  "[BasketResult Component] Calculate Basket Result",
  props<{ products: Product[] }>()
);
export const CalculateBasketResultSuccess = createAction(
  "[BasketResult Component] Calculate Basket Result Success",
  props<{ result: BasketResult }>()
);
