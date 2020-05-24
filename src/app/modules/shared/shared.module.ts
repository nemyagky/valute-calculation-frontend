import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigateButtonComponent } from './navigate-button/navigate-button.component';



@NgModule({
	declarations: [
		NavigateButtonComponent,
	],
	exports: [
		NavigateButtonComponent,
	],
	imports: [
		CommonModule,
	],
})
export class SharedModule { }
