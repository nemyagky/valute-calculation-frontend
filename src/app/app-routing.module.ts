import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasketComponent } from './modules/basket/components/basket/basket.component';
import { CatalogComponent } from './modules/catalog/containers/catalog/catalog.component';

const routes: Routes = [
    {
        path: 'basket',
        component: BasketComponent
    },
    {
        path: 'catalog',
        component: CatalogComponent
    },
    {
        path: '',
        redirectTo: '/catalog',
        pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
