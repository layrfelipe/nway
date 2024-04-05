import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { InputCustomEvent } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {

  protected userInput = signal<string | number | null | undefined>(null)
  protected passwordInput = signal<string | number | null | undefined>(null)

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  onChangeUserInput(ev: InputCustomEvent) {
    this.userInput.set(ev.target.value)
  }

  onChangePasswordInput(ev: InputCustomEvent) {
    this.passwordInput.set(ev.target.value)    
  }

  login() {
    if (!this.userInput() || !this.passwordInput()) {
      alert("Preencha os dados")
      return
    }
    
    this.router.navigate(['/inicio'])
    
    // this.authService.authenticate({ user: this.userInput(), password: this.passwordInput() }).subscribe({
    //   next: (response: any) => {
    //     this.authService.setAccessToken(response.access_token)
    //     this.router.navigate(['/inicio'])
    //   },
    //   error: (e: any) => {
    //     console.log("Login error", e)
    //     this.authService.clearAccessToken()
    //   }
    // })
  }

  mockData() {
    this.userInput.set(environment.clientId)
    this.passwordInput.set(environment.clientSecret)
  }
}
