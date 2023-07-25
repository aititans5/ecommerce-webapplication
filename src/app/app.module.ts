import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './modules/auth/auth.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { InventoryModule } from './modules/inventory/inventory.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,

    CoreModule,

    SharedModule,

    AuthModule,

    AppRoutingModule,

    FormsModule,

    ReactiveFormsModule,

    InventoryModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
