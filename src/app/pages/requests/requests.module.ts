import { NgModule } from '@angular/core';
import { RequestsPage } from './requests.page';
import { RequestsPageRoutingModule } from './requests-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RequestsPageRoutingModule
  ],
  declarations: [RequestsPage]
})
export class RequestsPageModule {}
