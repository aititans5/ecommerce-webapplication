import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './pages/item-list/item-list.component';
import { HistoryComponent } from './pages/history/history.component';
import { PaymentFormComponent } from './pages/payment-form/payment-form.component';
import { InventoryRoutingModule } from './inventory-routing.module';
import { LayoutsModule } from 'src/app/layouts/layouts.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ItemListComponent,
    HistoryComponent,
    PaymentFormComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    LayoutsModule,
    HttpClientModule
  ]
})
export class InventoryModule { }
