import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeasurementQueryPage } from './measurement-query.page';
import { MeasurementQueryCustomerPage } from './customer/measurement-query-customer.page';

const routes: Routes = [
  {
    path: '',
    component: MeasurementQueryPage,
    pathMatch: 'full'
  },
  {
    path: 'cliente/:id',
    component: MeasurementQueryCustomerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeasurementQueryPageRoutingModule {}
