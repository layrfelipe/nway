import { Component, OnInit, computed, signal } from '@angular/core';

@Component({
  selector: 'app-webhooks',
  templateUrl: 'webhooks.page.html',
  styleUrls: ['webhooks.page.scss'],
})
export class WebhooksPage implements OnInit {

  protected screenWidth = signal<number>(0)
  protected isMobile = computed(() => {
    return this.screenWidth() < 993
  })

  constructor() {}

  ngOnInit() {
    this.screenWidth.set(window.innerWidth);
  }

}
