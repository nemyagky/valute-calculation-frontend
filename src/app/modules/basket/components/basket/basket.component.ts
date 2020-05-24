import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { getAllBasketProducts } from '../../../shared/products/state/selectors/selectors';

@Component({
	selector: 'app-basket',
	templateUrl: './basket.component.html',
	styleUrls: ['./basket.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasketComponent implements OnInit {
	public products$ = this.store.pipe(select(getAllBasketProducts));

	constructor(private store: Store) {
	}

	ngOnInit(): void {
	}

}
