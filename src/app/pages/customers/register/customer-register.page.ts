import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-register',
  templateUrl: 'customer-register.page.html',
  styleUrls: ['customer-register.page.scss'],
})
export class CustomerRegisterPage {

  constructor(
    private router: Router
  ) { }

  backToHome() {
    this.router.navigate(['inicio'])
  }
}
