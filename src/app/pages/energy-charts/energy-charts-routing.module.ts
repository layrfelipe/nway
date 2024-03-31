import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnergyChartsPage } from './energy-charts.page';

const routes: Routes = [
  {
    path: '',
    component: EnergyChartsPage,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnergyChartsPageRoutingModule {}
