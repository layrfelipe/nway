import { NgModule } from '@angular/core';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NotificationsPage } from './notifications/notifications.page';

@NgModule({
  imports: [
    SharedModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, NotificationsPage]
})
export class HomePageModule {}
