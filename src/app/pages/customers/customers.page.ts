import { Component, OnInit, computed, signal } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-customers',
  templateUrl: 'customers.page.html',
  styleUrls: ['customers.page.scss'],
})
export class CustomersPage implements OnInit {

  protected customers: any;

  protected screenWidth = signal<number>(0)
  protected isMobile = computed(() => {
    return this.screenWidth() < 993
  })

  protected isPhone = computed(() => {
    return this.screenWidth() < 768
  })

  constructor(
    private router: Router,
    private storage: StorageService
  ) {}

  ngOnInit() {
    this.screenWidth.set(window.innerWidth);
    
    this.storage.getCustomersMockData().subscribe((customers) => {
      if (customers) {
        console.log(customers)
        this.customers = customers;
      }
    })
  }

  goToCustomerDetailsPage() {
    this.router.navigate(['clientes', 'cliente'])
  }

  goToCustomerRegisterPage() {
    this.router.navigate(['clientes', 'registro'])
  }
}
