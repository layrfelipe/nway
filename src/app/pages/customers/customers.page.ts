import { Component, OnInit, computed, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: 'customers.page.html',
  styleUrls: ['customers.page.scss'],
})
export class CustomersPage implements OnInit {

  protected screenWidth = signal<number>(0)
  protected isMobile = computed(() => {
    return this.screenWidth() < 993
  })

  protected isPhone = computed(() => {
    return this.screenWidth() < 768
  })

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    this.screenWidth.set(window.innerWidth);
  }

  goToCustomerDetailsPage() {
    this.router.navigate(['clientes', 'cliente'])
  }

  goToCustomerRegisterPage() {
    this.router.navigate(['clientes', 'registro'])
  }
}
