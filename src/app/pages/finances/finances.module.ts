import { NgModule } from '@angular/core';
import { FinancesPage } from './finances.page';
import { FinancesPageRoutingModule } from './finances-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    FinancesPageRoutingModule
  ],
  declarations: [FinancesPage]
})
export class FinancesPageModule {}
