import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-status',
  templateUrl: 'request-status.page.html',
  styleUrls: ['request-status.page.scss'],
})
export class RequestStatusPage {

  constructor(
    private router: Router
  ) {}

  goToCustomerDetailPage() {
    this.router.navigate(['clientes/cliente'])
  }
}
