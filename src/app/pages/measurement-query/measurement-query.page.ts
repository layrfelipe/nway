import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-measurement-query',
  templateUrl: 'measurement-query.page.html',
  styleUrls: ['measurement-query.page.scss'],
})
export class MeasurementQueryPage {

  constructor(
    private router: Router
  ) {}

  goToMeasurementQueryCustomerPage() {
    this.router.navigate(['consulta-de-medicao', 'cliente'])    
  }
}
