import { NgModule } from '@angular/core';
import { LogsPage } from './logs.page';
import { LogsPageRoutingModule } from './logs-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    LogsPageRoutingModule
  ],
  declarations: [LogsPage]
})
export class LogsPageModule {}
