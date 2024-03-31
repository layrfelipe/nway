import { NgModule } from '@angular/core';
import { CustomersPage } from './customers.page';
import { CustomersPageRoutingModule } from './customers-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CustomersPageRoutingModule
  ],
  declarations: [CustomersPage]
})
export class CustomersPageModule {}
