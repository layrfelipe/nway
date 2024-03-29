import { NgModule } from '@angular/core';
import { LoginPage } from './login.page';
import { LoginPageRoutingModule } from './login-routing.module';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    LoginPageRoutingModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
