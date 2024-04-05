import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-notifications',
  templateUrl: 'notifications.page.html',
  styleUrls: ['notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  protected notifications: any;

  constructor(
    private storage: StorageService
  ) {}

  ngOnInit() {
    this.storage.getNotificationsMockData().subscribe((notifications) => {
      if (notifications) {
        this.notifications = notifications;
      }
    })
  }
}
