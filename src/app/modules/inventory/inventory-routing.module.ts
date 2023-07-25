import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ItemListComponent } from './pages/item-list/item-list.component';
import { HistoryComponent } from './pages/history/history.component';
import { PaymentFormComponent } from './pages/payment-form/payment-form.component';

const routes: Routes = [
    {
      path: 'ecommerce/inventory',
      redirectTo: '/ecommerce/inventory',
      pathMatch: 'full'
    },
    {
    path: 'ecommerce',
    children: [
      {
        path: 'inventory',
        component: ItemListComponent
      },
      {
        path: 'history',
        component: HistoryComponent
      },
      {
        path : 'payment',
        component : PaymentFormComponent
      }
    ]
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports : [RouterModule]
})
export class InventoryRoutingModule { }
