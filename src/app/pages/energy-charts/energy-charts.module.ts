import { NgModule } from '@angular/core';
import { EnergyChartsPage } from './energy-charts.page';
import { EnergyChartsPageRoutingModule } from './energy-charts-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    EnergyChartsPageRoutingModule
  ],
  declarations: [EnergyChartsPage]
})
export class EnergyChartsPageModule {}
