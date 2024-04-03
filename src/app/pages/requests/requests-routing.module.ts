import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestsPage } from './requests.page';
import { RequestStatusPage } from './request-status/request-status.page';
import { RequestMigrationPage } from './migration/request-migration.page';
import { RequestCancellationPage } from './cancellation/request-cancellation.page';

const routes: Routes = [
  {
    path: '',
    component: RequestsPage,
    pathMatch: 'full'
  },
  {
    path: 'status',
    component: RequestStatusPage
  },
  {
    path: 'migracao',
    component: RequestMigrationPage
  },
  {
    path: 'cancelamento',
    component: RequestCancellationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestsPageRoutingModule {}
