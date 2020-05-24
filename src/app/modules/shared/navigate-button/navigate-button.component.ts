import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'navigate-button',
	templateUrl: './navigate-button.component.html',
	styleUrls: ['./navigate-button.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigateButtonComponent implements OnInit {
	@Input() label: string;
	@Input() routeUrl: string;

	constructor(private router: Router) {
	}

	ngOnInit(): void {
	}

	public onClick() {
		this.router.navigateByUrl(this.routeUrl);
	}

}
