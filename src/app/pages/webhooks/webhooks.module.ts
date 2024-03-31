import { NgModule } from '@angular/core';
import { WebhooksPage } from './webhooks.page';
import { WebhooksPageRoutingModule } from './webhooks-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    WebhooksPageRoutingModule
  ],
  declarations: [WebhooksPage]
})
export class WebhooksPageModule {}
