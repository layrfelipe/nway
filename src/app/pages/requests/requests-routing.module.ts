import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestsPage } from './requests.page';
import { RequestStatusPage } from './request-status/request-status.page';

const routes: Routes = [
  {
    path: '',
    component: RequestsPage,
    pathMatch: 'full'
  },
  {
    path: 'status',
    component: RequestStatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestsPageRoutingModule {}
