import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../../../shared/products/models/product.interface';
import { CalculateBasketResult } from '../../../shared/products/state/actions/products.actions';
import { getBasketResult } from '../../../shared/products/state/selectors/selectors';
import { BasketResult } from '../../models/basket-result.interface';

@Component({
	selector: 'basket-total',
	templateUrl: './basket-total.component.html',
	styleUrls: ['./basket-total.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasketTotalComponent implements OnInit {
	@Input() private products: Product[];
	public basketResult$: Observable<BasketResult>;

	constructor(private store: Store) {
	}

	ngOnInit() {
		this.basketResult$ = this.store.pipe(
			select(getBasketResult)
		);
	}

	public calculateResult() {
		this.store.dispatch(CalculateBasketResult({products: this.products}));
	}

}
