import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersPage } from './customers.page';
import { CustomerPage } from './customer/customer.page';

const routes: Routes = [
  {
    path: '',
    component: CustomersPage,
    pathMatch: 'full'
  },
  {
    path: 'cliente',
    component: CustomerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersPageRoutingModule {}
