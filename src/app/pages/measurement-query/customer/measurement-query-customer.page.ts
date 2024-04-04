import { Component, OnInit, computed, signal } from '@angular/core';

@Component({
  selector: 'app-measurement-query-customer',
  templateUrl: 'measurement-query-customer.page.html',
  styleUrls: ['measurement-query-customer.page.scss'],
})
export class MeasurementQueryCustomerPage implements OnInit {

  protected screenWidth = signal<number>(0)

  protected isPhone = computed(() => {
    return this.screenWidth() < 768
  })

  constructor(
  ) {}

  ngOnInit(): void {
    this.screenWidth.set(window.innerWidth)
  }
}
