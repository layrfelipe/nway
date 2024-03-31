import { NgModule } from '@angular/core';
import { MeasurementQueryPage } from './measurement-query.page';
import { MeasurementQueryPageRoutingModule } from './measurement-query-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    MeasurementQueryPageRoutingModule
  ],
  declarations: [MeasurementQueryPage]
})
export class MeasurementQueryPageModule {}
