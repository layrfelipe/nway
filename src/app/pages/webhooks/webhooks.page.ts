import { Component, OnInit, computed, signal } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-webhooks',
  templateUrl: 'webhooks.page.html',
  styleUrls: ['webhooks.page.scss'],
})
export class WebhooksPage implements OnInit {

  protected webhooks: any;

  protected screenWidth = signal<number>(0)
  protected isMobile = computed(() => {
    return this.screenWidth() < 993
  })

  constructor(
    private storage: StorageService
  ) {}

  ngOnInit() {
    this.screenWidth.set(window.innerWidth);

    this.storage.getWebhooksMockData().subscribe((webhooks) => {
      if (webhooks) {
        this.webhooks = webhooks;
      }
    })
  }
}
