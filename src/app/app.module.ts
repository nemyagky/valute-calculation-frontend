import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasketModule } from './modules/basket/basket.module';
import { StoreModule } from '@ngrx/store';
import { CatalogModule } from './modules/catalog/catalog.module';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BasketModule,
		CatalogModule,
		StoreModule.forRoot({}),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {
}
