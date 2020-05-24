import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ProductsListComponent } from './containers/products-list/products-list.component';
import { ProductItemComponent } from './particles/product-item/product-item.component';
import { ProductsService } from './services/products.service';
import { ProductsEffects } from './state/effects/products.effects';
import { productsReducer } from './state/redusers/products.reduser';



@NgModule({
	declarations: [ProductsListComponent, ProductItemComponent],
	imports: [
		CommonModule,
		FormsModule,
		HttpClientModule,
		EffectsModule.forRoot([ProductsEffects]),
		StoreModule.forFeature('productsState', productsReducer),
	],
	exports: [
		ProductsListComponent
	],
	providers: [
		ProductsService
	]
})
export class ProductsModule { }
