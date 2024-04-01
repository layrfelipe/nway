import { NgModule } from '@angular/core';
import { ConfigsPage } from './configs.page';
import { ConfigsPageRoutingModule } from './configs-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ConfigsPageRoutingModule
  ],
  declarations: [ConfigsPage]
})
export class ConfigsPageModule {}
