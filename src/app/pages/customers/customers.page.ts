import { Component, computed, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: 'customers.page.html',
  styleUrls: ['customers.page.scss'],
})
export class CustomersPage {

  protected screenWidth = signal<number>(0)
  protected isMobile = computed(() => {
    return this.screenWidth() < 993
  })

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
