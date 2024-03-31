import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebhooksPage } from './webhooks.page';

const routes: Routes = [
  {
    path: '',
    component: WebhooksPage,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebhooksPageRoutingModule {}
