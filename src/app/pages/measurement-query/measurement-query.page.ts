import { Component, computed, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-measurement-query',
  templateUrl: 'measurement-query.page.html',
  styleUrls: ['measurement-query.page.scss'],
})
export class MeasurementQueryPage {

  protected screenWidth = signal<number>(0)
  protected isMobile = computed(() => {
    return this.screenWidth() < 993
  })
  
  constructor(
    private router: Router
  ) {}

  goToMeasurementQueryCustomerPage() {
    this.router.navigate(['consulta-de-medicao', 'cliente'])    
  }

}
