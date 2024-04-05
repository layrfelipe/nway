import { Component, OnInit, computed, signal } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  protected user: any;
  protected notifications: any;
  protected requests: any;

  protected screenWidth = signal<number>(0)

  protected isPhone = computed(() => {
    return this.screenWidth() < 768
  })

  constructor(
    private router: Router,
    private storage: StorageService
  ) {}

  goToRequestsPage() {
    this.router.navigate(['solicitacoes'])
  }

  goToNotificationsPage() {
    this.router.navigate(['inicio', 'notificacoes'])
  }

  ngOnInit() {
    this.screenWidth.set(window.innerWidth)
    
    this.storage.getUsersMockData().subscribe((users) => {
      if (users) {
        this.user = users[0];
      }
    })

    this.storage.getNotificationsMockData().subscribe((notifications) => {
      if (notifications) {
        this.notifications = notifications.slice(0, 3);
      }
    })

    this.storage.getRequestsMockData().subscribe((requests) => {
      if (requests) {
        this.requests = requests.slice(0, 3)
      }
    })
  }
}
