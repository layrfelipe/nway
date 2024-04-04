import { Component, OnInit, computed, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-requests',
  templateUrl: 'requests.page.html',
  styleUrls: ['requests.page.scss'],
})
export class RequestsPage implements OnInit {

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
