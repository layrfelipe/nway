import { NgModule } from '@angular/core';
import { MeasurementQueryPage } from './measurement-query.page';
import { MeasurementQueryPageRoutingModule } from './measurement-query-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MeasurementQueryCustomerPage } from './customer/measurement-query-customer.page';

@NgModule({
  imports: [
    SharedModule,
    MeasurementQueryPageRoutingModule
  ],
  declarations: [MeasurementQueryPage, MeasurementQueryCustomerPage]
})
export class MeasurementQueryPageModule {}
