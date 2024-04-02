import { NgModule } from '@angular/core';
import { RequestsPage } from './requests.page';
import { RequestsPageRoutingModule } from './requests-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RequestStatusPage } from './request-status/request-status.page';

@NgModule({
  imports: [
    SharedModule,
    RequestsPageRoutingModule
  ],
  declarations: [RequestsPage, RequestStatusPage]
})
export class RequestsPageModule {}
