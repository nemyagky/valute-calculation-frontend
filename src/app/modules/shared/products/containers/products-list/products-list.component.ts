import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Product } from '../../models/product.interface';

@Component({
	selector: 'products',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent {

	@Input() public products: Product[];
	@Input() public disabled: boolean = false;

	public trackByProduct(index: number, item: Product): number {
		return item.id;
	}

}

