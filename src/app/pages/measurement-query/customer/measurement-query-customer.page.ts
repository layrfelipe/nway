import { Component, OnInit, computed, signal } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-measurement-query-customer',
  templateUrl: 'measurement-query-customer.page.html',
  styleUrls: ['measurement-query-customer.page.scss'],
})
export class MeasurementQueryCustomerPage implements OnInit {

  protected customerData: any;
  protected id: any;

  protected screenWidth = signal<number>(0)

  protected isPhone = computed(() => {
    return this.screenWidth() < 768
  })

  constructor(
    private router: Router,
    private storage: StorageService
  ) {}

  ngOnInit(): void {
    this.screenWidth.set(window.innerWidth)
    this.id = this.router.url.split("/")[3]
    this.getCustomerData()
  }

  getCustomerData() {
    this.storage.getMeasurementQueriesMockData().subscribe(customers => {
      let customerData = customers.filter((customer: any) => customer.companyId == this.id)[0]
      this.customerData = customerData
    })
  }
}
