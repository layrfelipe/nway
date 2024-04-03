import { NgModule } from '@angular/core';
import { RequestsPage } from './requests.page';
import { RequestsPageRoutingModule } from './requests-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RequestStatusPage } from './request-status/request-status.page';
import { RequestMigrationPage } from './migration/request-migration.page';
import { RequestCancellationPage } from './cancellation/request-cancellation.page';

@NgModule({
  imports: [
    SharedModule,
    RequestsPageRoutingModule
  ],
  declarations: [RequestsPage, RequestStatusPage, RequestMigrationPage, RequestCancellationPage]
})
export class RequestsPageModule {}
