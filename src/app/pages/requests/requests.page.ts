import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-requests',
  templateUrl: 'requests.page.html',
  styleUrls: ['requests.page.scss'],
})
export class RequestsPage {

  constructor(
    private router: Router
  ) {}

  goToRequestStatusPage() {
    this.router.navigate(['solicitacoes', 'status'])
  }
  goToRequestMigrationPage() {
    this.router.navigate(['solicitacoes', 'migracao'])
  }

  goToRequestCancellationPage() {
    this.router.navigate(['solicitacoes', 'cancelamento'])
  }

}
