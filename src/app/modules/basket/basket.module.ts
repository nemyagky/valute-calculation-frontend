import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsModule } from '../shared/products/products.module';
import { SharedModule } from '../shared/shared.module';
import { BasketComponent } from './components/basket/basket.component';
import { BasketTotalComponent } from './particles/basket-total/basket-total.component';
import { BasketCalculationService } from './services/basket-calculation.service';

@NgModule({
	declarations: [BasketComponent, BasketTotalComponent],
	imports: [
		CommonModule,
		ProductsModule,
		SharedModule,
	],
	providers: [
		BasketCalculationService,
	]
})
export class BasketModule {
}
