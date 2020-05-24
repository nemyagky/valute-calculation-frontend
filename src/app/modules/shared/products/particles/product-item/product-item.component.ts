import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from '../../models/product.interface';
import { AddProductToBasket, UpdateProductQuantity } from '../../state/actions/products.actions';

@Component({
	selector: 'product-item',
	templateUrl: './product-item.component.html',
	styleUrls: ['./product-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductItemComponent {
	@Input() public product: Product;
	@Input() public disabled: boolean = false;

	constructor(private store: Store) {
	}

	public updateQuantity(quantityChange: number): void {
		const newQuantity = this.product.quantity + quantityChange;
		this.store.dispatch(UpdateProductQuantity({
			id: this.product.id,
			quantity: newQuantity > 1 ? newQuantity : 1
		}));
	}

	public addProductToCurrency(): void {
		this.store.dispatch(AddProductToBasket({product: this.product}))
	}

}
