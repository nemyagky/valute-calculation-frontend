import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { LoadAllProducts } from '../../../shared/products/state/actions/products.actions';
import { getAllCatalogProducts } from '../../../shared/products/state/selectors/selectors';

@Component({
	selector: 'catalog',
	templateUrl: './catalog.component.html',
	styleUrls: ['./catalog.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CatalogComponent implements OnInit {
	public products$ = this.store.pipe(select(getAllCatalogProducts));

	constructor(private store: Store) {
		this.store.dispatch(LoadAllProducts());
	}

	ngOnInit(): void {
	}

}
