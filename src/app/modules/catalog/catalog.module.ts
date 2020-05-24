import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsModule } from '../shared/products/products.module';
import { SharedModule } from '../shared/shared.module';
import { CatalogComponent } from './containers/catalog/catalog.component';

@NgModule({
	declarations: [CatalogComponent],
	imports: [
		CommonModule,
		ProductsModule,
		SharedModule,
	],
})
export class CatalogModule {
}
