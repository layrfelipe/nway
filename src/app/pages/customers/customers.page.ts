import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: 'customers.page.html',
  styleUrls: ['customers.page.scss'],
})
export class CustomersPage {

  constructor(
    private router: Router
  ) {}

  goToCustomerDetailsPage() {
    this.router.navigate(['clientes', 'cliente'])
  }

  goToCustomerRegisterPage() {
    this.router.navigate(['clientes', 'registro'])
  }
}
