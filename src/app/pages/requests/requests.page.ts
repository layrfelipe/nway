import { Component, OnInit, computed, signal } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-requests',
  templateUrl: 'requests.page.html',
  styleUrls: ['requests.page.scss'],
})
export class RequestsPage implements OnInit {

  protected requests: any;

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

    this.storage.getRequestsMockData().subscribe((requests) => {
      if (requests) {
        this.requests = requests;
      }
    })
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
