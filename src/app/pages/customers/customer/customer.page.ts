import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-customer',
  templateUrl: 'customer.page.html',
  styleUrls: ['customer.page.scss'],
})
export class CustomerPage {

  protected companyId: any;
  protected customerData: any;

  constructor(
    private router: Router,
    private storage: StorageService
  ) {}

  ngOnInit() {
    this.companyId = this.router.url.split("/")[3]
    this.getCustomerStatusData()
  }

  getCustomerStatusData() {
    this.storage.getCustomersMockData().subscribe(customers => {
      let customer = customers.filter((customer: any) => customer.companyId == this.companyId)[0]
      this.customerData = customer
    })
  }
}
